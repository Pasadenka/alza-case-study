export default interface IErrorModal {
    show: boolean;
    message: string;
    onClose?(): void;
}
