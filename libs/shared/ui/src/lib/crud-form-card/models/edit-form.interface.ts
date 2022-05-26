export interface EditForm {
  edit: () => void;
  cancel: () => void;
  load: () => void;
  delete: () => void;
  save: () => void;
  invalid: boolean;
}
