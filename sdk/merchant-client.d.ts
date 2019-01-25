import { ServiceUrls } from "./constants";
import { BiConsumerFn, IAuthorizeSessionRequest, IMerchantClient, ISessionAuth } from "./types";
export declare class MerchantClient implements IMerchantClient {
    private readonly baseServiceUrl;
    private readonly logger?;
    constructor(baseServiceUrl: ServiceUrls, logger?: BiConsumerFn<string, string> | undefined);
    authorizeSession(reqData: IAuthorizeSessionRequest): Promise<ISessionAuth>;
    private log;
}