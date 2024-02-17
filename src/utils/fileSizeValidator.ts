
import { FormControl, ValidationErrors } from '@angular/forms';

export function fileSizeValidator(maxSize: number) {
  return (control: FormControl): ValidationErrors | null => {
    const file = control.value as File;
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);
      // Use the non-null assertion operator (!) here ^
      if (fileSizeInMB > maxSize) {
        return { fileSize: true, message: 'File size exceeds the limit. Maximum size allowed: ' + maxSize + ' MB' };
      }
    }
    return null;
  };
}