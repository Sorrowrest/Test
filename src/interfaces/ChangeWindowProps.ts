import { ElementCreated } from './ElementCreated';
import { ElementParams } from './ElementParams';

export interface ChangeWindowProps {
    elementParams: ElementParams | undefined;
    closeChangeWindow: () => void;
    changeSomethingEl: (newElement: ElementParams) => void;
}