import { IDesc, IContacts, ILife, IIntereses, IName } from './extraInfo';

export default interface IInfo {
    desc: IDesc | null | undefined
    cont: IContacts | undefined | null
    life: ILife | null | undefined
    intr: IIntereses | null | undefined
    name: IName | null | undefined
}