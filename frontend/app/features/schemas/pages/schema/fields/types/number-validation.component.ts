/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldDto, LanguageDto, NumberFieldPropertiesDto, RootFieldDto, Types } from '@app/shared';

@Component({
    selector: 'sqx-number-validation',
    styleUrls: ['number-validation.component.scss'],
    templateUrl: 'number-validation.component.html'
})
export class NumberValidationComponent implements OnChanges {
    @Input()
    public fieldForm: FormGroup;

    @Input()
    public field: FieldDto;

    @Input()
    public properties: NumberFieldPropertiesDto;

    @Input()
    public languages: ReadonlyArray<LanguageDto>;

    @Input()
    public isLocalizable?: boolean | null;

    public showUnique: boolean;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['field']) {
            this.showUnique = Types.is(this.field, RootFieldDto) && !this.field.isLocalizable;
        }

        if (changes['fieldForm']) {
            if (this.showUnique) {
                this.fieldForm.setControl('isUnique',
                    new FormControl());
            }

            this.fieldForm.setControl('maxValue',
                new FormControl());

            this.fieldForm.setControl('minValue',
                new FormControl());

            this.fieldForm.setControl('defaultValue',
                new FormControl());

            this.fieldForm.setControl('defaultValues',
                new FormControl());
        }

        this.fieldForm.patchValue(this.field.properties);
    }
}