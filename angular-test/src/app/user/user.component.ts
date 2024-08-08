import { Component } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UserService } from './user.service'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {
    title = 'angular-test';

    form: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            dob: ['', Validators.required],
            address: ['', Validators.required, this.addressValidator]
        })
    }

    onSubmit(value: any) {
        console.log('onSubmit  ', value)
        this.userService.createUser(value)
            .subscribe((res: any) => {
                alert('Successfully created')
            },
                (err) => {
                    alert('Error')
                })
    }

    addressValidator(control: AbstractControl) {
        const pattern = '/[^a-zA-Z0-9\s]/';
        if (pattern.match(control.value)) {
            return { invalidAddress: true }
        }
        return null;
    }
}
