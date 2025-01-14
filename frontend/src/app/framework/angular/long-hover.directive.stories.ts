/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CodeEditorComponent, LongHoverDirective, SqxFrameworkModule } from '@app/framework';

export default {
    title: 'Framework/LongHover',
    component: CodeEditorComponent,
    argTypes: {
        selector: {
            control: 'text',
        },
        hover: {
            action: 'hover',
        },
        cancelled: {
            action: 'cancelled',
        },
    },
    render: args => ({
        props: args,
        template: `
            <div (sqxLongHover)="hover()" (longHoverCancelled)="cancelled()" [longHoverSelector]="selector">
                <div style="border: 1px solid #eee; padding: 100px">
                    <button class="btn btn-primary">Button</button>
                </div>
            </div>
        `,
    }),
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SqxFrameworkModule,
                SqxFrameworkModule.forRoot(),
            ],
        }),
    ],
} as Meta;

type Story = StoryObj<LongHoverDirective>;

export const Default: Story = {
    args: {
        hover: action('Hover') as any,
        selector: '',
        cancelled: action('Cancelled') as any,
    },
};

export const Selector: Story = {
    args: {
        hover: action('Hover') as any,
        selector: 'button',
        cancelled: action('Cancelled') as any,
    },
};