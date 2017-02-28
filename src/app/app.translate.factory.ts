import {TranslateStaticLoader} from 'ng2-translate';

export function TranslateLoaderFactory(http: any) {
  return new TranslateStaticLoader(http, '/ismaelramos/assets/i18n', '.json');
}
