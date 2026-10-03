import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3ec2319ee11180a095eeeef00fb36909',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '배모(Baemo) 공식 이용 안내소',
  domain: 'baemo.vercel.app',
  author: 'jakil93',

  // open graph metadata (optional)
  description: '부산 대표 2030 배드민턴 모임 공식 이용 안내소',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/guide' : '3ec2319ee11180c28bc5c4f98752ccfb', //배모 이용 가이드
    '/rules' : '3ec2319ee111801ab76acac654da728d', //이용 규칙
    '/beginner' : '3ec2319ee11180b0b755f5c0d01dede5', //초보 가이드
    '/yeonsin' : '3ed2319ee111803f9c66f41ed41656fa', //연신초 출입방법
    '/hoam' : '3ed2319ee11180199f01fe9cfb7c5133', //호암초 출입방법
    '/yeonseo' : '3ed2319ee11180b7bf7fd73218564051' //연서초 출입방법
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
