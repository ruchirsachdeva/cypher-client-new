import {FormControl} from '@angular/forms';

export class mobilenumberValidation {
    static checkValidation(control: FormControl) {
        let regex;
        let previousvalue = control.value;
        regex = /^[6-9][0-9]*$/;
        if (previousvalue && !previousvalue.match(regex)) {
            control.setValue(previousvalue.slice(0, (previousvalue.length - 1)));
            previousvalue = control.value;
            return {
                isError: true
              };
        }
        return null;
    }
}