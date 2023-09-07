#
# Stage 1, Build Backend
#

FROM mcr.microsoft.com/dotnet/sdk:7.0 as backend

ARG SQUIDEX__BUILD__VERSION=7.0.0

WORKDIR /src

# Copy nuget project files.
COPY backend/*.sln ./

# Copy the main source project files
COPY backend/src/*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p src/${file%.*}/ && mv $file src/${file%.*}/; done

# Copy the test project files
COPY backend/tests/*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p tests/${file%.*}/ && mv $file tests/${file%.*}/; done

# Copy the extension project files
COPY backend/extensions/*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p extensions/${file%.*}/ && mv $file extensions/${file%.*}/; done

RUN dotnet restore

COPY backend .
 
# Test Backend
RUN dotnet test --no-restore --filter Category!=Dependencies

# Publish
RUN dotnet publish --no-restore src/Squidex/Squidex.csproj --output /build/ --configuration Release -p:version=$SQUIDEX__BUILD__VERSION

# Install tools
RUN dotnet tool install --tool-path /tools dotnet-counters \
 && dotnet tool install --tool-path /tools dotnet-dump \
 && dotnet tool install --tool-path /tools dotnet-gcdump \
 && dotnet tool install --tool-path /tools dotnet-trace


#
# Stage 2, Build Frontend
#
FROM ubuntu:22.04 as frontend
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update
RUN apt-get install software-properties-common -y
RUN apt-get install -y curl wget
RUN apt-get install -y build-essential libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18.10.0
RUN mkdir -p $NVM_DIR
# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.39.5/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Install Chrome Stable
RUN add-apt-repository ppa:saiarcot895/chromium-beta
RUN apt-get install -y gnupg && \
    apt-get install -y fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
            libgtk2.0-0 libnss3 libatk-bridge2.0-0 libdrm2 libxkbcommon0 libgbm1 libasound2
RUN apt-get install chromium-browser -y

ENV CHROME_BIN /usr/bin/chromium-browser

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

WORKDIR /src

ENV CONTINUOUS_INTEGRATION=1

# Copy Node project files
COPY frontend/package*.json ./

# Install Node packages 
RUN npm install --force

COPY frontend .

# Build Frontend
RUN npm run test:coverage && npm run build

RUN cp -a build /build/

 
#
# Stage 3, Build runtime
#
FROM mcr.microsoft.com/dotnet/aspnet:7.0-bullseye-slim

ARG SQUIDEX__RUNTIME__VERSION=7.0.0

# Curl for debugging and libc-dev for protobuf
RUN apt-get update \
 && apt-get install -y curl libc-dev

# Default tool directory
WORKDIR /tools

# Copy tools from backend build stage.
COPY --from=backend /tools .

# Default app directory
WORKDIR /app

# Copy from build stages
COPY --from=backend /build/ .
COPY --from=frontend /build/ wwwroot/build/

EXPOSE 80
EXPOSE 443

ENV DIAGNOSTICS__COUNTERSTOOL=/tools/dotnet-counters
ENV DIAGNOSTICS__DUMPTOOL=/tools/dotnet-dump
ENV DIAGNOSTICS__GCDUMPTOOL=/tools/dotnet-gcdump
ENV DIAGNOSTICS__TRACETOOL=/tools/dotnet-trace

ENTRYPOINT ["dotnet", "Squidex.dll"]

ENV EXPOSEDCONFIGURATION__VERSION=$SQUIDEX__RUNTIME__VERSION
