import { BuyNowCartRequestBody } from '../../../cart';
import { AmazonPayV2ButtonParameters } from '../../../payment/strategies/amazon-pay-v2';

export function isWithBuyNowFeatures(
    options?: AmazonPayV2ButtonInitializeOptions,
): options is WithBuyNowFeatures {
    return !!(options as WithBuyNowFeatures)?.buyNowInitializeOptions;
}

export interface WithBuyNowFeatures {
    /**
     * The options that are required to initialize Buy Now functionality.
     */
    buyNowInitializeOptions?: {
        getBuyNowCartRequestBody?(): BuyNowCartRequestBody | void;
    };
}

/**
 * The required config to render the AmazonPayV2 button.
 */
export type AmazonPayV2ButtonInitializeOptions = AmazonPayV2ButtonParameters | WithBuyNowFeatures;
