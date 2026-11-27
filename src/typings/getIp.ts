export interface GetIpResponse {
    networkProtocol: "NETHERNET_JSONRPC";
    address: string;
    pendingUpdate: boolean;
    sessionRegionData: {
        regionName: string;
        serviceQuality: number;
    };
}