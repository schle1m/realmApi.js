export interface editRealmRequest {
    name?: string
    description?: string
}

export type editRealmResponse = | undefined | { errorCode: number; errorMsg: string }