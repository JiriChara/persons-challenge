import createCRUDModule from 'vuex-crud';

import client from '@/utils/client';

export default createCRUDModule({
  resource: 'persons',

  client,

  idAttribute: 'guid',
});
