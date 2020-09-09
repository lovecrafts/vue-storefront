import { Logger } from '@vue-storefront/core/src/types';

const config = {
  publicKey: null,
  ckoWebHookUrl: 'https://play-commercetools.cko-playground.ckotech.co/api',
  tokenizedCardKey: 'temporary-tokenized-card',
  saveInstrumentKey: 'save-instrument',
  card: {
    styles: {},
    localization: null
  },
  logger: null
};

interface Configuration {
  publicKey: string;
  ckoWebHookUrl?: string;
  tokenizedCardKey?: string;
  saveInstrumentKey?: string;
  card?: {
    styles?: any;
    localization?: string | CustomLocalization;
  };
  logger?: Logger;
}

interface CustomLocalization {
  cardNumberPlaceholder: string;
  expiryMonthPlaceholder: string;
  expiryYearPlaceholder: string;
  cvvPlaceholder: string;
}

const defaultStyles = {
  'card-number': {
    color: 'red'
  },
  base: {
    color: '#72757e',
    fontSize: '19px',
    minWidth: '60px'
  },
  invalid: {
    color: 'red'
  },
  placeholder: {
    base: {
      color: 'black',
      fontSize: '19px'
    }
  }
};

const setup = (params: Configuration) => {
  config.publicKey = params.publicKey;
  config.ckoWebHookUrl = params.ckoWebHookUrl || config.ckoWebHookUrl;
  config.card.styles = params.card?.styles || defaultStyles;
  config.card.localization = params.card?.localization || null;
  config.tokenizedCardKey = params.tokenizedCardKey || config.tokenizedCardKey;
  config.logger = params.logger || console as Logger;
};

const getPublicKey = () => config.publicKey;
const getCkoWebhookUrl = () => config.ckoWebHookUrl;
const getCkoProxyUrl = () => `${window.location.origin}/cko-api`;
const getFramesStyles = () => config.card.styles;
const getFramesLocalization = () => config.card.localization;
const getTransactionTokenKey = () => config.tokenizedCardKey;
const getSaveInstrumentKey = () => config.saveInstrumentKey;
const getLogger = () => config.logger;

export { setup, getPublicKey, getCkoWebhookUrl, getFramesStyles, getFramesLocalization, getCkoProxyUrl, getTransactionTokenKey, getSaveInstrumentKey, getLogger, Configuration };
