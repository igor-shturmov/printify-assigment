export type IWizardSteppers = Array<IWizardStepper>;

export interface IWizardStepper {
    step: number;
    value: string;
}
