export default interface IContainerModule {
    onLoadingData?(isLoading: boolean): void;
    onError?(msg: string): void;
}
