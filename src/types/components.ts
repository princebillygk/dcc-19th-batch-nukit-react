export interface LogoProperties {
    width?: string,
    height?: string
}

export interface  SearchBoxProps{
    placeHolder: string,
    changeHandler(event: React.ChangeEvent<HTMLInputElement>): void
}