import {CustomerSignMeInDraft, CustomerSignMeUpDraft} from '@vue-storefront/commercetools-api/src/types/GraphQL';
import { logger } from '@vue-storefront/commercetools-api/src/index';

type UserData = CustomerSignMeUpDraft | CustomerSignMeInDraft;

export const authenticate = async (userData: UserData, fn) => {
  try {
    const userResponse = await fn(userData);
    return userResponse.data.user;
  } catch (err) {
    logger.error(err.graphQLErrors ? err.graphQLErrors[0].message : err);
  }
};
