export enum PublicationEnum{
    digital = "Digital",
    physical = "Physical"
}

export default abstract class Publication {
    private typeOfPublish: PublicationEnum;

    constructor(typeOfPublish: PublicationEnum) {
        this.typeOfPublish = typeOfPublish;
    }

    abstract defyPublishType(typeOfPublish: string): void;

}