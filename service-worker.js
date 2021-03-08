/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5db6948ffef7192000b861876bd4a760"
  },
  {
    "url": "about/index.html",
    "revision": "9bf421bbb8250cde52352b137d7f964a"
  },
  {
    "url": "assets/about/pay.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/about/wechat.png",
    "revision": "85d390f888e19319b73a02818f2e6efd"
  },
  {
    "url": "assets/axios/01/01.jpg",
    "revision": "5bfa7fad97477225c56633560be6dc0f"
  },
  {
    "url": "assets/axios/02/01.gif",
    "revision": "bcb5dc2368978b50fce37b300e0c6899"
  },
  {
    "url": "assets/axios/03/01.png",
    "revision": "cc1a21844283b0887e52809fe7e6ad1d"
  },
  {
    "url": "assets/axios/03/02.png",
    "revision": "7383e278ea3d691297a1e5f9036e69e2"
  },
  {
    "url": "assets/axios/03/03.png",
    "revision": "d68d9957d739d915427ad108c3b88688"
  },
  {
    "url": "assets/axios/03/04.png",
    "revision": "556b4eb59830d32ebe72cb5001a355de"
  },
  {
    "url": "assets/axios/03/05.png",
    "revision": "dd88275cac5b7b7119ffabada3265fbe"
  },
  {
    "url": "assets/axios/03/06.png",
    "revision": "68755a777e77c6dcd94f1c3d11a18b4b"
  },
  {
    "url": "assets/axios/03/07.png",
    "revision": "f2fc6f2da16affbb8e7339ed95a2d9d2"
  },
  {
    "url": "assets/axios/03/08.png",
    "revision": "eb1b72d11250aef3cbc36dbc528dfc04"
  },
  {
    "url": "assets/axios/03/09.gif",
    "revision": "f7fb2bca06fe3bbd1b48d469cfbcc769"
  },
  {
    "url": "assets/axios/04/01.gif",
    "revision": "90ac8fdd1bfe8643b3c8785d1f04e425"
  },
  {
    "url": "assets/axios/05/01.gif",
    "revision": "0ac47c75322d8518f4362ac04ec7ac0e"
  },
  {
    "url": "assets/axios/06/01.gif",
    "revision": "8f55186664913d2c21b796648617c94e"
  },
  {
    "url": "assets/axios/06/02.jpg",
    "revision": "7bd0187d5270a31b23017d85927b7eaa"
  },
  {
    "url": "assets/axios/07/01.png",
    "revision": "4c3c86a9ca8e27f3e8076fce311effc5"
  },
  {
    "url": "assets/axios/07/02.png",
    "revision": "b06ef03e0e6fddd3f867f4620e657e39"
  },
  {
    "url": "assets/axios/08/01.png",
    "revision": "a0a2e2d5e6dd67850088b1c41d3c1e41"
  },
  {
    "url": "assets/axios/08/02.png",
    "revision": "49eb070497789941680edd0f80f43e39"
  },
  {
    "url": "assets/axios/09/01.png",
    "revision": "f7ca51e7663701428e57972d85c7083b"
  },
  {
    "url": "assets/axios/09/02.png",
    "revision": "d7cd2f5d965c3724f3217462c6874ebc"
  },
  {
    "url": "assets/axios/09/03.png",
    "revision": "2233a341659890f952329c5b61ce4792"
  },
  {
    "url": "assets/axios/10/01.png",
    "revision": "4289ba4e289e225212d5b9082d94b82a"
  },
  {
    "url": "assets/axios/11/01.gif",
    "revision": "7bd4e97edfd9cfd93d472294b24a3edb"
  },
  {
    "url": "assets/axios/12/01.gif",
    "revision": "4e2e30622edaf88201d40265608166f6"
  },
  {
    "url": "assets/axios/13/01.png",
    "revision": "8db5b262185f14df43f7a77192e5d52e"
  },
  {
    "url": "assets/axios/13/02.gif",
    "revision": "f9ef5933d9ffccb2aa6af7fc9b4230a3"
  },
  {
    "url": "assets/axios/14/01.png",
    "revision": "1ba7ca23c6869c3ea2604dd203f068f5"
  },
  {
    "url": "assets/axios/14/02.png",
    "revision": "be4c7dcbec84ce1d0dd7828d16dc2cec"
  },
  {
    "url": "assets/axios/14/03.png",
    "revision": "2c0db367f89973522e7894c9d6c93386"
  },
  {
    "url": "assets/axios/14/04.png",
    "revision": "1760136ff3afe9a85e7ac5c6808d8417"
  },
  {
    "url": "assets/axios/14/05.png",
    "revision": "d85fc4b989b3088cb6c8100a01c50c79"
  },
  {
    "url": "assets/axios/15/01.png",
    "revision": "19e61a6fbaeadec2d323fbe83de41463"
  },
  {
    "url": "assets/axios/16/01.png",
    "revision": "10376c6606fb9afee780fa179cbd2c77"
  },
  {
    "url": "assets/axios/16/02.png",
    "revision": "a42aaf2afd5695c4e3b51a57ac92336b"
  },
  {
    "url": "assets/axios/17/01.png",
    "revision": "55308386bcfa956990311a4e3c2c7bb1"
  },
  {
    "url": "assets/axios/17/02.png",
    "revision": "1c9a1248f8300614b6b2de0973746aeb"
  },
  {
    "url": "assets/axios/19/01.gif",
    "revision": "fe9c73887eb7e19646d35009742bd76b"
  },
  {
    "url": "assets/axios/19/02.gif",
    "revision": "5199a486ee864ce43253234047a3bab1"
  },
  {
    "url": "assets/axios/20/01.gif",
    "revision": "fe9c73887eb7e19646d35009742bd76b"
  },
  {
    "url": "assets/axios/20/02.gif",
    "revision": "5199a486ee864ce43253234047a3bab1"
  },
  {
    "url": "assets/axios/21/01.png",
    "revision": "0773f77f531426527229101275e89d5e"
  },
  {
    "url": "assets/axios/22/01.gif",
    "revision": "98bf7106bd7ad9b22bf729874113e2af"
  },
  {
    "url": "assets/axios/22/02.gif",
    "revision": "8350bfededc1464c361c8b76aa986ed7"
  },
  {
    "url": "assets/axios/23/01.gif",
    "revision": "640269a16a9ca9d4f6fe8713162368cc"
  },
  {
    "url": "assets/axios/24/01.gif",
    "revision": "f3db68b277c24ac720714287454d627d"
  },
  {
    "url": "assets/axios/25/01.gif",
    "revision": "f1df5cf8f243b85c52b9e2d2824878e5"
  },
  {
    "url": "assets/axios/25/02.gif",
    "revision": "0d7d5c3f6e16bf59c7869c81ca1ef4f6"
  },
  {
    "url": "assets/axios/26/01.png",
    "revision": "de07a252a723823fcb852f8fdc579966"
  },
  {
    "url": "assets/axios/26/02.png",
    "revision": "d4fc6fb8f60695208f797d2d7eb5fe1e"
  },
  {
    "url": "assets/axios/27/01.png",
    "revision": "19e923efcec350eef6766d2745bcfa2a"
  },
  {
    "url": "assets/axios/28/01.png",
    "revision": "ca249143bf15d2722a73b969439dc42a"
  },
  {
    "url": "assets/axios/29/01.png",
    "revision": "54da419a2cf7848dd71ee8be73331d97"
  },
  {
    "url": "assets/axios/29/02.png",
    "revision": "f8a3eedb303117a2865ad30579dfd3e5"
  },
  {
    "url": "assets/axios/30/01.png",
    "revision": "4f725efa5e175edc90a8d98faf377ed9"
  },
  {
    "url": "assets/axios/31/01.png",
    "revision": "da920435199c9868d0483b594b66edd6"
  },
  {
    "url": "assets/css/0.styles.dff70739.css",
    "revision": "5d092a0b7b909abafc76fa9808418a20"
  },
  {
    "url": "assets/data-structure/05/01.png",
    "revision": "ff2b6a53b432b4d162fd9c859b4fa193"
  },
  {
    "url": "assets/data-structure/05/02.png",
    "revision": "86d7e13042216dceef553d1238ff8afb"
  },
  {
    "url": "assets/data-structure/05/03.png",
    "revision": "32de84c5202e4141dcd83465146da738"
  },
  {
    "url": "assets/data-structure/05/04.png",
    "revision": "40b572f27709469c20ca972a53ae0a1f"
  },
  {
    "url": "assets/data-structure/06/01.png",
    "revision": "d55165fcfc3f54b2153babe88be4a894"
  },
  {
    "url": "assets/data-structure/06/02.png",
    "revision": "a26713a6f4e4aa04ed17173ded03acd9"
  },
  {
    "url": "assets/data-structure/06/03.png",
    "revision": "f16e30efae3ebc7ca309032808ef8fef"
  },
  {
    "url": "assets/data-structure/06/04.png",
    "revision": "1d5dd3594889cd6a8cfe140f2b74a818"
  },
  {
    "url": "assets/img/01.0773f77f.png",
    "revision": "0773f77f531426527229101275e89d5e"
  },
  {
    "url": "assets/img/01.0ac47c75.gif",
    "revision": "0ac47c75322d8518f4362ac04ec7ac0e"
  },
  {
    "url": "assets/img/01.0c659b87.png",
    "revision": "0c659b877607bd5ba64c37d6eec17741"
  },
  {
    "url": "assets/img/01.10376c66.png",
    "revision": "10376c6606fb9afee780fa179cbd2c77"
  },
  {
    "url": "assets/img/01.19e61a6f.png",
    "revision": "19e61a6fbaeadec2d323fbe83de41463"
  },
  {
    "url": "assets/img/01.19e923ef.png",
    "revision": "19e923efcec350eef6766d2745bcfa2a"
  },
  {
    "url": "assets/img/01.1ba7ca23.png",
    "revision": "1ba7ca23c6869c3ea2604dd203f068f5"
  },
  {
    "url": "assets/img/01.4289ba4e.png",
    "revision": "4289ba4e289e225212d5b9082d94b82a"
  },
  {
    "url": "assets/img/01.4c3c86a9.png",
    "revision": "4c3c86a9ca8e27f3e8076fce311effc5"
  },
  {
    "url": "assets/img/01.4e2e3062.gif",
    "revision": "4e2e30622edaf88201d40265608166f6"
  },
  {
    "url": "assets/img/01.4f725efa.png",
    "revision": "4f725efa5e175edc90a8d98faf377ed9"
  },
  {
    "url": "assets/img/01.54da419a.png",
    "revision": "54da419a2cf7848dd71ee8be73331d97"
  },
  {
    "url": "assets/img/01.55308386.png",
    "revision": "55308386bcfa956990311a4e3c2c7bb1"
  },
  {
    "url": "assets/img/01.5bfa7fad.jpg",
    "revision": "5bfa7fad97477225c56633560be6dc0f"
  },
  {
    "url": "assets/img/01.5cdc813f.png",
    "revision": "5cdc813fa151bd6479e32315491cd196"
  },
  {
    "url": "assets/img/01.640269a1.gif",
    "revision": "640269a16a9ca9d4f6fe8713162368cc"
  },
  {
    "url": "assets/img/01.7bd4e97e.gif",
    "revision": "7bd4e97edfd9cfd93d472294b24a3edb"
  },
  {
    "url": "assets/img/01.824520d8.png",
    "revision": "824520d8760711afb8d5ae1577f91847"
  },
  {
    "url": "assets/img/01.86f3858d.jpeg",
    "revision": "86f3858d49a106c755e0e2ab5488fc11"
  },
  {
    "url": "assets/img/01.8db5b262.png",
    "revision": "8db5b262185f14df43f7a77192e5d52e"
  },
  {
    "url": "assets/img/01.8f551866.gif",
    "revision": "8f55186664913d2c21b796648617c94e"
  },
  {
    "url": "assets/img/01.90ac8fdd.gif",
    "revision": "90ac8fdd1bfe8643b3c8785d1f04e425"
  },
  {
    "url": "assets/img/01.98bf7106.gif",
    "revision": "98bf7106bd7ad9b22bf729874113e2af"
  },
  {
    "url": "assets/img/01.a0a2e2d5.png",
    "revision": "a0a2e2d5e6dd67850088b1c41d3c1e41"
  },
  {
    "url": "assets/img/01.a561fb22.jpg",
    "revision": "a561fb2294e391aada11f816cb86eab0"
  },
  {
    "url": "assets/img/01.b902dcdd.png",
    "revision": "b902dcdd405398a91415ed34c19528ad"
  },
  {
    "url": "assets/img/01.bcb5dc23.gif",
    "revision": "bcb5dc2368978b50fce37b300e0c6899"
  },
  {
    "url": "assets/img/01.c7208dae.png",
    "revision": "c7208dae7194b618249d8f7944bab7c5"
  },
  {
    "url": "assets/img/01.ca249143.png",
    "revision": "ca249143bf15d2722a73b969439dc42a"
  },
  {
    "url": "assets/img/01.d55165fc.png",
    "revision": "d55165fcfc3f54b2153babe88be4a894"
  },
  {
    "url": "assets/img/01.da920435.png",
    "revision": "da920435199c9868d0483b594b66edd6"
  },
  {
    "url": "assets/img/01.de07a252.png",
    "revision": "de07a252a723823fcb852f8fdc579966"
  },
  {
    "url": "assets/img/01.e2879831.png",
    "revision": "e2879831475cb456e565d71178f53f6e"
  },
  {
    "url": "assets/img/01.ed3e3547.png",
    "revision": "ed3e354747522c4cecb085cf1e9be299"
  },
  {
    "url": "assets/img/01.f1df5cf8.gif",
    "revision": "f1df5cf8f243b85c52b9e2d2824878e5"
  },
  {
    "url": "assets/img/01.f3db68b2.gif",
    "revision": "f3db68b277c24ac720714287454d627d"
  },
  {
    "url": "assets/img/01.f7ca51e7.png",
    "revision": "f7ca51e7663701428e57972d85c7083b"
  },
  {
    "url": "assets/img/01.fe9c7388.gif",
    "revision": "fe9c73887eb7e19646d35009742bd76b"
  },
  {
    "url": "assets/img/01.ff2b6a53.png",
    "revision": "ff2b6a53b432b4d162fd9c859b4fa193"
  },
  {
    "url": "assets/img/02.0d7d5c3f.gif",
    "revision": "0d7d5c3f6e16bf59c7869c81ca1ef4f6"
  },
  {
    "url": "assets/img/02.1c9a1248.png",
    "revision": "1c9a1248f8300614b6b2de0973746aeb"
  },
  {
    "url": "assets/img/02.49eb0704.png",
    "revision": "49eb070497789941680edd0f80f43e39"
  },
  {
    "url": "assets/img/02.4ca31140.png",
    "revision": "4ca3114062ff9b6bef69034b837efc45"
  },
  {
    "url": "assets/img/02.5199a486.gif",
    "revision": "5199a486ee864ce43253234047a3bab1"
  },
  {
    "url": "assets/img/02.6e87a811.png",
    "revision": "6e87a811e2dac29565b147330be9f19f"
  },
  {
    "url": "assets/img/02.709316d5.png",
    "revision": "709316d555697d0667ec3ebe77a7a63a"
  },
  {
    "url": "assets/img/02.7405d49a.png",
    "revision": "7405d49adfd6d8205484a80deb2c4b48"
  },
  {
    "url": "assets/img/02.7bd0187d.jpg",
    "revision": "7bd0187d5270a31b23017d85927b7eaa"
  },
  {
    "url": "assets/img/02.8350bfed.gif",
    "revision": "8350bfededc1464c361c8b76aa986ed7"
  },
  {
    "url": "assets/img/02.86d7e130.png",
    "revision": "86d7e13042216dceef553d1238ff8afb"
  },
  {
    "url": "assets/img/02.a26713a6.png",
    "revision": "a26713a6f4e4aa04ed17173ded03acd9"
  },
  {
    "url": "assets/img/02.a49b272b.png",
    "revision": "a49b272b1b74e32d98b95f7bb58b0b6e"
  },
  {
    "url": "assets/img/02.b06ef03e.png",
    "revision": "b06ef03e0e6fddd3f867f4620e657e39"
  },
  {
    "url": "assets/img/02.be4c7dcb.png",
    "revision": "be4c7dcbec84ce1d0dd7828d16dc2cec"
  },
  {
    "url": "assets/img/02.d4fc6fb8.png",
    "revision": "d4fc6fb8f60695208f797d2d7eb5fe1e"
  },
  {
    "url": "assets/img/02.d7cd2f5d.png",
    "revision": "d7cd2f5d965c3724f3217462c6874ebc"
  },
  {
    "url": "assets/img/02.e9630944.png",
    "revision": "e96309441c53f76aa2c16e588159de66"
  },
  {
    "url": "assets/img/02.f43d1e17.png",
    "revision": "f43d1e176deb0637de0d12968802b804"
  },
  {
    "url": "assets/img/02.f8a3eedb.png",
    "revision": "f8a3eedb303117a2865ad30579dfd3e5"
  },
  {
    "url": "assets/img/02.f9ef5933.gif",
    "revision": "f9ef5933d9ffccb2aa6af7fc9b4230a3"
  },
  {
    "url": "assets/img/03.15b729e2.png",
    "revision": "15b729e2e70fdc50b740818015f261ed"
  },
  {
    "url": "assets/img/03.2233a341.png",
    "revision": "2233a341659890f952329c5b61ce4792"
  },
  {
    "url": "assets/img/03.2c0db367.png",
    "revision": "2c0db367f89973522e7894c9d6c93386"
  },
  {
    "url": "assets/img/03.32de84c5.png",
    "revision": "32de84c5202e4141dcd83465146da738"
  },
  {
    "url": "assets/img/03.37261621.png",
    "revision": "372616218fc04e7f2765fa9ef5dbefdb"
  },
  {
    "url": "assets/img/03.4a28e215.png",
    "revision": "4a28e21554958bf39386661b4f7f0124"
  },
  {
    "url": "assets/img/03.939522d3.png",
    "revision": "939522d352e44702c0f1896dcb685918"
  },
  {
    "url": "assets/img/03.945cc888.gif",
    "revision": "945cc888601efdb9110f18d63b36d35d"
  },
  {
    "url": "assets/img/03.c9b0ed57.png",
    "revision": "c9b0ed5788af3a60ec71627f17504576"
  },
  {
    "url": "assets/img/03.f16e30ef.png",
    "revision": "f16e30efae3ebc7ca309032808ef8fef"
  },
  {
    "url": "assets/img/04.1760136f.png",
    "revision": "1760136ff3afe9a85e7ac5c6808d8417"
  },
  {
    "url": "assets/img/04.40b572f2.png",
    "revision": "40b572f27709469c20ca972a53ae0a1f"
  },
  {
    "url": "assets/img/04.41d1862e.png",
    "revision": "41d1862e16b88022a0d4aa19bd0da1dc"
  },
  {
    "url": "assets/img/04.49240f84.gif",
    "revision": "49240f84cb82c25c28ebc5e006f6401c"
  },
  {
    "url": "assets/img/04.7a10071c.png",
    "revision": "7a10071ce86ea79b8b23735faf12db3e"
  },
  {
    "url": "assets/img/04.ab45d69a.png",
    "revision": "ab45d69ae72df65d766f1b0de70eb5b9"
  },
  {
    "url": "assets/img/04.b2859188.png",
    "revision": "b2859188130aab0bb4630c293ffd6afb"
  },
  {
    "url": "assets/img/05.661ca0a3.png",
    "revision": "661ca0a311754775930d974a27789284"
  },
  {
    "url": "assets/img/05.6bd169c6.png",
    "revision": "6bd169c6788c10b3a0afa7315fcd8d6c"
  },
  {
    "url": "assets/img/05.bfb3ab12.gif",
    "revision": "bfb3ab1223d374431ff317a83792a0c7"
  },
  {
    "url": "assets/img/05.ccbc1908.png",
    "revision": "ccbc190873d4662f86d7ec19590b8706"
  },
  {
    "url": "assets/img/05.d85fc4b9.png",
    "revision": "d85fc4b989b3088cb6c8100a01c50c79"
  },
  {
    "url": "assets/img/06.e95a2554.png",
    "revision": "e95a2554b1546db03b126397b2ad8dc7"
  },
  {
    "url": "assets/img/07.33c94b25.png",
    "revision": "33c94b25a1b5785a7ad39ad897e3bebb"
  },
  {
    "url": "assets/img/09.f7fb2bca.gif",
    "revision": "f7fb2bca06fe3bbd1b48d469cfbcc769"
  },
  {
    "url": "assets/img/1.581c531e.png",
    "revision": "581c531e38e21fefa23095ecba589580"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.77583d8a.png",
    "revision": "77583d8ad55c0b48658bc76a3ac69db3"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.94be0e21.png",
    "revision": "94be0e21f25aaa3dfbd6806fe83cb2cf"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.e957fa97.png",
    "revision": "e957fa9736d32648edf7ce2bee613cb5"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/1.f9d7a76f.png",
    "revision": "f9d7a76f146c7041674ed91b085ce8fc"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.16af9379.png",
    "revision": "16af937923443293561ea0f4a447f2b3"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.44c78bb5.png",
    "revision": "44c78bb53f95cf9dd846d7626f9eb214"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.69a76841.png",
    "revision": "69a76841c1cf50d68648a5049f3a25bd"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.4f9a6d86.png",
    "revision": "4f9a6d86459b2837deb33a111543236c"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.b960770a.png",
    "revision": "b960770a4efd40074928584f14e7ecf9"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.e2ec1a7a.png",
    "revision": "e2ec1a7ae5f01132aa2965afa04bf56b"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.601e548f.png",
    "revision": "601e548f8319c3d48600ceda01c37f86"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/4.fc61c3f9.png",
    "revision": "fc61c3f993e89447085f66502ddc3d42"
  },
  {
    "url": "assets/img/5.23bb9867.png",
    "revision": "23bb986762647d6368cc9b9f96106deb"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.a0a38f3f.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/pay.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.85d390f8.png",
    "revision": "85d390f888e19319b73a02818f2e6efd"
  },
  {
    "url": "assets/javascript/01/01.png",
    "revision": "5cdc813fa151bd6479e32315491cd196"
  },
  {
    "url": "assets/javascript/01/02.png",
    "revision": "6e87a811e2dac29565b147330be9f19f"
  },
  {
    "url": "assets/javascript/01/03.png",
    "revision": "c9b0ed5788af3a60ec71627f17504576"
  },
  {
    "url": "assets/javascript/01/04.png",
    "revision": "7a10071ce86ea79b8b23735faf12db3e"
  },
  {
    "url": "assets/javascript/02/01.jpg",
    "revision": "a561fb2294e391aada11f816cb86eab0"
  },
  {
    "url": "assets/javascript/02/02.png",
    "revision": "709316d555697d0667ec3ebe77a7a63a"
  },
  {
    "url": "assets/javascript/02/03.gif",
    "revision": "945cc888601efdb9110f18d63b36d35d"
  },
  {
    "url": "assets/javascript/02/04.gif",
    "revision": "49240f84cb82c25c28ebc5e006f6401c"
  },
  {
    "url": "assets/javascript/02/05.gif",
    "revision": "bfb3ab1223d374431ff317a83792a0c7"
  },
  {
    "url": "assets/js/10.50bd3c7e.js",
    "revision": "c32450415e18cf79348abbbf1a5bfe9b"
  },
  {
    "url": "assets/js/100.f010707d.js",
    "revision": "69845b27efe3d7f337d049cadca762a5"
  },
  {
    "url": "assets/js/101.c697bd29.js",
    "revision": "e107ce599b246568a189b8aa2a49c1a4"
  },
  {
    "url": "assets/js/102.ffc46a66.js",
    "revision": "b0b136c4424e64ed986f381a35139bbe"
  },
  {
    "url": "assets/js/103.4c6703ff.js",
    "revision": "9b0b02470cc9dcc03afa843449ddc628"
  },
  {
    "url": "assets/js/104.f4e1383c.js",
    "revision": "7df06b2971393336f5e4238dd175efff"
  },
  {
    "url": "assets/js/105.7b10a888.js",
    "revision": "5bc540ad76e18ab46b9e4a80424bb3b9"
  },
  {
    "url": "assets/js/106.f5c9a0a2.js",
    "revision": "d78886b37915acc68430aa9cb5a38c86"
  },
  {
    "url": "assets/js/107.0d441859.js",
    "revision": "1c93c2011c5cc186d78f52ebec495154"
  },
  {
    "url": "assets/js/108.ca70fb20.js",
    "revision": "89ae97e03ca5950fedda9485a5fd1610"
  },
  {
    "url": "assets/js/109.2a29baf0.js",
    "revision": "221bd8c3309c729b9ad68cd985661dd8"
  },
  {
    "url": "assets/js/11.541b1952.js",
    "revision": "12fc36ce75991785ace209ab89ed91eb"
  },
  {
    "url": "assets/js/110.453deff5.js",
    "revision": "d2e17d4f58e5fd55e4b289a87c5b0bf3"
  },
  {
    "url": "assets/js/111.5358d4a8.js",
    "revision": "4e1282a0e0f691c667bc82239e0d23db"
  },
  {
    "url": "assets/js/112.d53f500d.js",
    "revision": "858cd2d2a17581d9e100e38641ef4dcc"
  },
  {
    "url": "assets/js/113.6240c374.js",
    "revision": "cff5e39075bc93321e659333ca7966ee"
  },
  {
    "url": "assets/js/114.6c16c57e.js",
    "revision": "f8754b5a8e9edff7de768cf9bacd5368"
  },
  {
    "url": "assets/js/115.baa2c72e.js",
    "revision": "e772c39a65e9548af854471b5eb7a953"
  },
  {
    "url": "assets/js/116.4daeaab2.js",
    "revision": "00172d9f89eeb4c5e0596567efa285bf"
  },
  {
    "url": "assets/js/12.4dc86a6b.js",
    "revision": "9308c845d3b21c3af092e2c81430f6e9"
  },
  {
    "url": "assets/js/13.19f9795d.js",
    "revision": "6eaed0c30f8e4bae6b3a67761a4d437c"
  },
  {
    "url": "assets/js/14.76c07bf3.js",
    "revision": "9f5620d7bc8e47c7bf8ecafc93395996"
  },
  {
    "url": "assets/js/15.6391c788.js",
    "revision": "2a5230f0bdf0e6cfc01c985b873f3f4b"
  },
  {
    "url": "assets/js/16.19751a27.js",
    "revision": "f669886f3b1094e323ec249a9b5bce1b"
  },
  {
    "url": "assets/js/17.e1c007cb.js",
    "revision": "35a5fa13da663e0e28092fd78353a12d"
  },
  {
    "url": "assets/js/18.fd0fd2a7.js",
    "revision": "cadfab2063a741331bc8090ee388c465"
  },
  {
    "url": "assets/js/19.21a887b8.js",
    "revision": "2e229471a2997488e4933a35fc24f6a0"
  },
  {
    "url": "assets/js/2.05b34f12.js",
    "revision": "4e4bed1c8587b1de9bc36d70f672eb71"
  },
  {
    "url": "assets/js/20.7777d67c.js",
    "revision": "60e804d17e35b9f1b8333c3ed72cfd93"
  },
  {
    "url": "assets/js/21.4c841cc7.js",
    "revision": "fea0cd9ed3700ce514055a9fcb4f71f5"
  },
  {
    "url": "assets/js/22.a01289c0.js",
    "revision": "aeb3610eb9342fb3366b7149cb9d58a5"
  },
  {
    "url": "assets/js/23.600d1c1f.js",
    "revision": "193429858d38ed7b3b09dfc7b249ca5f"
  },
  {
    "url": "assets/js/24.09f74994.js",
    "revision": "635c084615ff19bf321956109f83c750"
  },
  {
    "url": "assets/js/25.56d80d7a.js",
    "revision": "4d16dc55ecf6d1286d6ffa2b3aaa8155"
  },
  {
    "url": "assets/js/26.4dd0bffa.js",
    "revision": "675a1ee02b83af77901d9ab989f29126"
  },
  {
    "url": "assets/js/27.03e139d8.js",
    "revision": "a48efab6338b4b7e849d1b96540715ca"
  },
  {
    "url": "assets/js/28.fa30939e.js",
    "revision": "584b9ce5447976151363594f04d4ab0b"
  },
  {
    "url": "assets/js/29.da57b007.js",
    "revision": "894fb2530269cb5465c8c63047e7805e"
  },
  {
    "url": "assets/js/3.4304b908.js",
    "revision": "4593770dffb67517739b8ccb413bd427"
  },
  {
    "url": "assets/js/30.a9811344.js",
    "revision": "44bbfb8d8b584300e73dae34a0c428c5"
  },
  {
    "url": "assets/js/31.194ee557.js",
    "revision": "bee71f6b7c60c39b1a3b8dab401b3db8"
  },
  {
    "url": "assets/js/32.f996892b.js",
    "revision": "77cbcfac00fe733754619f72519ec9da"
  },
  {
    "url": "assets/js/33.e3ad5197.js",
    "revision": "f14f0d1a9d0e168b53ab3d6feb194b20"
  },
  {
    "url": "assets/js/34.0180c1db.js",
    "revision": "43c341bacfbd38bbcc9c2ae5001930f4"
  },
  {
    "url": "assets/js/35.c7d11f7e.js",
    "revision": "af29465c78055dd3c964467a4a801141"
  },
  {
    "url": "assets/js/36.ab8921d6.js",
    "revision": "a13592c558eae3f124c598b269d36014"
  },
  {
    "url": "assets/js/37.abaf179e.js",
    "revision": "55c3af267131b1cc9084566cfd97d3c9"
  },
  {
    "url": "assets/js/38.d8a50e1a.js",
    "revision": "975d9b65337dc7b46f3ac1e01164860a"
  },
  {
    "url": "assets/js/39.80322cef.js",
    "revision": "dd0fd8531048f7013b5c6ffcccd99fc2"
  },
  {
    "url": "assets/js/4.8c4ee646.js",
    "revision": "92f615ad678a99f93119908e041fa0e4"
  },
  {
    "url": "assets/js/40.b923e1ea.js",
    "revision": "ba65e0e061123ea932cd45f2b581ff78"
  },
  {
    "url": "assets/js/41.453cc765.js",
    "revision": "30d842d5080c8cb503c4e80287966cb8"
  },
  {
    "url": "assets/js/42.e28f3825.js",
    "revision": "6a28a02bf3cc65c5580621edec8bcd73"
  },
  {
    "url": "assets/js/43.0287de91.js",
    "revision": "47072665ec41133029f966794cc27256"
  },
  {
    "url": "assets/js/44.034518bc.js",
    "revision": "b40bb02d4898a6276eb9116037c22951"
  },
  {
    "url": "assets/js/45.ad2ae6c7.js",
    "revision": "feb91325821685cad739b69924b694d7"
  },
  {
    "url": "assets/js/46.720bc2e2.js",
    "revision": "ebb8cdb0f938342e20267cf52660fea7"
  },
  {
    "url": "assets/js/47.40da4493.js",
    "revision": "b1bf01e67bc59e749589c05f594a6b06"
  },
  {
    "url": "assets/js/48.e6ccfea5.js",
    "revision": "10885d78e64240237bb64a98e4479ded"
  },
  {
    "url": "assets/js/49.26ba1491.js",
    "revision": "b612c26d5fbde02f29cd0dd845040809"
  },
  {
    "url": "assets/js/5.845bfbc1.js",
    "revision": "2badbad769131d4063e2baa9987e11f9"
  },
  {
    "url": "assets/js/50.121a8fec.js",
    "revision": "b1bb3b1289a1a71c523b2b44cfee3cb9"
  },
  {
    "url": "assets/js/51.5ab1f368.js",
    "revision": "2545a6fe331cf4221fe1090dfec75d87"
  },
  {
    "url": "assets/js/52.1389490b.js",
    "revision": "a8399e4b870884fdc77e81169961cfe8"
  },
  {
    "url": "assets/js/53.baff4daa.js",
    "revision": "5ff8e4c36f658e7663b55d01416dad9d"
  },
  {
    "url": "assets/js/54.a6c29759.js",
    "revision": "de0a8bb8c25e9b14b46083a6eb1c9dbb"
  },
  {
    "url": "assets/js/55.8395bf88.js",
    "revision": "1d9543093d4354dfda08c9d6000c465d"
  },
  {
    "url": "assets/js/56.2a381b35.js",
    "revision": "a10b17ed7edeed4dc4fe9c8764f93d39"
  },
  {
    "url": "assets/js/57.3bd021b2.js",
    "revision": "d2eac3c8d0ab9908630ba277f96fd900"
  },
  {
    "url": "assets/js/58.4757becd.js",
    "revision": "75da58e8535a8418eb453c6d1be75ae6"
  },
  {
    "url": "assets/js/59.c859053e.js",
    "revision": "6e8e6eef6f9c6d72be5ba02012c5dd42"
  },
  {
    "url": "assets/js/6.6727fd3a.js",
    "revision": "d550af3f5ef5b8c2d9aa389f1b5b0a63"
  },
  {
    "url": "assets/js/60.a6daf16f.js",
    "revision": "8f1fc722588afc752744ebf01c63afd5"
  },
  {
    "url": "assets/js/61.0f85843f.js",
    "revision": "56d62ea87d119586f6db3e6f324cd7be"
  },
  {
    "url": "assets/js/62.b6548010.js",
    "revision": "4ce2f2dc18adc3bcfcbb33d469f393db"
  },
  {
    "url": "assets/js/63.951a2e87.js",
    "revision": "debc991106ac4f2cc32f43599e5ae856"
  },
  {
    "url": "assets/js/64.722d94a0.js",
    "revision": "5ab312a80540e9b0efbfbc2636eca8ee"
  },
  {
    "url": "assets/js/65.13144f87.js",
    "revision": "3ca277922626578afac255df65cafa1e"
  },
  {
    "url": "assets/js/66.12d2bba4.js",
    "revision": "2568254dca36e3bb5942343348a9f695"
  },
  {
    "url": "assets/js/67.686767cc.js",
    "revision": "5358c5a155be34e600cea90a08ad5a8e"
  },
  {
    "url": "assets/js/68.48569d90.js",
    "revision": "4c713472c39c5dae3f0507cd00286f05"
  },
  {
    "url": "assets/js/69.d8cff1cf.js",
    "revision": "3ec861f7405c655abb5257b9e1206014"
  },
  {
    "url": "assets/js/7.49321003.js",
    "revision": "59b25514d51408ea0ca82bbb2b0d0cf6"
  },
  {
    "url": "assets/js/70.f119b9a6.js",
    "revision": "ceeb0096a8fcdcd5e04a0e1a8debb8d4"
  },
  {
    "url": "assets/js/71.fde4607c.js",
    "revision": "a4d309cca0cb2885f0518c29fd35db72"
  },
  {
    "url": "assets/js/72.48d02362.js",
    "revision": "5e662dd9cd5d55e4ca9674910542695b"
  },
  {
    "url": "assets/js/73.4ee64777.js",
    "revision": "c8736ed3fae4fb5f009eb3b477d37ac0"
  },
  {
    "url": "assets/js/74.3089169e.js",
    "revision": "f0999530105c909b77268ab04a443c6a"
  },
  {
    "url": "assets/js/75.214b302b.js",
    "revision": "896873d0ad308587da6cf091c340275c"
  },
  {
    "url": "assets/js/76.c3c1c8f9.js",
    "revision": "dc9454f587a5864067de3a50a3d7129b"
  },
  {
    "url": "assets/js/77.d086238d.js",
    "revision": "ff78aacc56f652c6623474d7ec0441cd"
  },
  {
    "url": "assets/js/78.991999a3.js",
    "revision": "7c44d058f111d05b5e8b51f9fb5c73da"
  },
  {
    "url": "assets/js/79.010ea110.js",
    "revision": "6c874d5e1d8f471906ca311ae5fad367"
  },
  {
    "url": "assets/js/8.d047a346.js",
    "revision": "374938e26a43cf76a412a414e7f0d7d9"
  },
  {
    "url": "assets/js/80.253d7858.js",
    "revision": "a2e33e2085358d196c12d80b91990f3d"
  },
  {
    "url": "assets/js/81.1781d0f4.js",
    "revision": "286edfd8a88b3de9de9a55f1b9464f3e"
  },
  {
    "url": "assets/js/82.f7fd0506.js",
    "revision": "d8c8d14ef74c22e7c531ec40585e3423"
  },
  {
    "url": "assets/js/83.c199f8fc.js",
    "revision": "98cf125d73b8c22345703a629fc28b86"
  },
  {
    "url": "assets/js/84.6b978a07.js",
    "revision": "1f1b5cd0bb38aff8739551f230a89778"
  },
  {
    "url": "assets/js/85.734987fa.js",
    "revision": "987b695f174957d3cbc81617f034c9f8"
  },
  {
    "url": "assets/js/86.8b88a83c.js",
    "revision": "fb6189e8c17d6358e43598d08dbf954d"
  },
  {
    "url": "assets/js/87.4e0c486f.js",
    "revision": "d5ccdbfb36f1ad4748be2ea1accf4a05"
  },
  {
    "url": "assets/js/88.7e648971.js",
    "revision": "d0227d3e8af66fdae490d2896a7d2efe"
  },
  {
    "url": "assets/js/89.11708280.js",
    "revision": "29edd9fe8fdee9ed2d2e4cf734d13231"
  },
  {
    "url": "assets/js/9.dd57d120.js",
    "revision": "ad0378abe3d133ea387b273730408b9e"
  },
  {
    "url": "assets/js/90.255cd203.js",
    "revision": "ca6704f37c81537fc453e94937f76079"
  },
  {
    "url": "assets/js/91.3b65d426.js",
    "revision": "11822d4104a777b0d7060157e36275c4"
  },
  {
    "url": "assets/js/92.b7794634.js",
    "revision": "8dd66d6a8c306d93decf4948fd226fb8"
  },
  {
    "url": "assets/js/93.fbef406e.js",
    "revision": "5b0edc1d54105874fab10889882432ed"
  },
  {
    "url": "assets/js/94.ad23c797.js",
    "revision": "fb46c52c44c6127203800d1f5a718d12"
  },
  {
    "url": "assets/js/95.105df6e1.js",
    "revision": "61d6b4b96abb1ac5b62f7b646d8b9058"
  },
  {
    "url": "assets/js/96.a625808d.js",
    "revision": "665323db5b2d404d64ba78cfeec1a6b5"
  },
  {
    "url": "assets/js/97.2b623ab4.js",
    "revision": "02e5dc72f5d75e36d1d7e6201b0b68e7"
  },
  {
    "url": "assets/js/98.6bfdf25b.js",
    "revision": "529826718aee91e68d1f35cda60e9926"
  },
  {
    "url": "assets/js/99.7a3350d8.js",
    "revision": "f9e7dbd45bd1a035140f42da455b03cf"
  },
  {
    "url": "assets/js/app.8f19096b.js",
    "revision": "05f67b80987d4916c4d7e55e235ba631"
  },
  {
    "url": "assets/koa2/00/01.png",
    "revision": "b902dcdd405398a91415ed34c19528ad"
  },
  {
    "url": "assets/koa2/02/01.png",
    "revision": "c7208dae7194b618249d8f7944bab7c5"
  },
  {
    "url": "assets/koa2/02/02.png",
    "revision": "7405d49adfd6d8205484a80deb2c4b48"
  },
  {
    "url": "assets/koa2/02/03.png",
    "revision": "4a28e21554958bf39386661b4f7f0124"
  },
  {
    "url": "assets/koa2/02/04.png",
    "revision": "b2859188130aab0bb4630c293ffd6afb"
  },
  {
    "url": "assets/koa2/02/05.png",
    "revision": "ccbc190873d4662f86d7ec19590b8706"
  },
  {
    "url": "assets/koa2/03/1.png",
    "revision": "77583d8ad55c0b48658bc76a3ac69db3"
  },
  {
    "url": "assets/koa2/03/2.png",
    "revision": "69a76841c1cf50d68648a5049f3a25bd"
  },
  {
    "url": "assets/koa2/03/3.png",
    "revision": "e2ec1a7ae5f01132aa2965afa04bf56b"
  },
  {
    "url": "assets/koa2/03/4.png",
    "revision": "601e548f8319c3d48600ceda01c37f86"
  },
  {
    "url": "assets/koa2/04/01.png",
    "revision": "0c659b877607bd5ba64c37d6eec17741"
  },
  {
    "url": "assets/koa2/04/02.png",
    "revision": "f43d1e176deb0637de0d12968802b804"
  },
  {
    "url": "assets/koa2/05/01.png",
    "revision": "e2879831475cb456e565d71178f53f6e"
  },
  {
    "url": "assets/koa2/05/02.png",
    "revision": "e96309441c53f76aa2c16e588159de66"
  },
  {
    "url": "assets/koa2/05/03.png",
    "revision": "372616218fc04e7f2765fa9ef5dbefdb"
  },
  {
    "url": "assets/koa2/05/04.png",
    "revision": "41d1862e16b88022a0d4aa19bd0da1dc"
  },
  {
    "url": "assets/koa2/05/05.png",
    "revision": "661ca0a311754775930d974a27789284"
  },
  {
    "url": "assets/koa2/05/06.png",
    "revision": "e95a2554b1546db03b126397b2ad8dc7"
  },
  {
    "url": "assets/koa2/05/07.png",
    "revision": "33c94b25a1b5785a7ad39ad897e3bebb"
  },
  {
    "url": "assets/koa2/07/01.png",
    "revision": "ed3e354747522c4cecb085cf1e9be299"
  },
  {
    "url": "assets/koa2/07/02.png",
    "revision": "4ca3114062ff9b6bef69034b837efc45"
  },
  {
    "url": "assets/koa2/07/03.png",
    "revision": "15b729e2e70fdc50b740818015f261ed"
  },
  {
    "url": "assets/koa2/07/04.png",
    "revision": "ab45d69ae72df65d766f1b0de70eb5b9"
  },
  {
    "url": "assets/koa2/07/05.png",
    "revision": "6bd169c6788c10b3a0afa7315fcd8d6c"
  },
  {
    "url": "assets/koa2/08/01.png",
    "revision": "824520d8760711afb8d5ae1577f91847"
  },
  {
    "url": "assets/koa2/08/02.png",
    "revision": "a49b272b1b74e32d98b95f7bb58b0b6e"
  },
  {
    "url": "assets/koa2/08/03.png",
    "revision": "939522d352e44702c0f1896dcb685918"
  },
  {
    "url": "assets/learn-vue-source-code/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/learn-vue-source-code/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/learn-vue-source-code/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/learn-vue-source-code/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/learn-vue-source-code/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/learn-vue-source-code/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/learn-vue-source-code/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/learn-vue-source-code/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/learn-vue-source-code/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/learn-vue-source-code/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/learn-vue-source-code/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/learn-vue-source-code/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/learn-vue-source-code/complie/9.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/learn-vue-source-code/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/learn-vue-source-code/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/learn-vue-source-code/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/learn-vue-source-code/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/learn-vue-source-code/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/learn-vue-source-code/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/learn-vue-source-code/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/learn-vue-source-code/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/learn-vue-source-code/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/learn-vue-source-code/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/react/01/01.jpeg",
    "revision": "86f3858d49a106c755e0e2ab5488fc11"
  },
  {
    "url": "assets/react/01/02.jpeg",
    "revision": "7d456cb00a940af7b4c5238d9cf71ffb"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/08/1.png",
    "revision": "94be0e21f25aaa3dfbd6806fe83cb2cf"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/08/2.png",
    "revision": "44c78bb53f95cf9dd846d7626f9eb214"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/08/3.png",
    "revision": "4f9a6d86459b2837deb33a111543236c"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/08/4.png",
    "revision": "fc61c3f993e89447085f66502ddc3d42"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/08/5.png",
    "revision": "23bb986762647d6368cc9b9f96106deb"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/09/1.png",
    "revision": "581c531e38e21fefa23095ecba589580"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/10/1.png",
    "revision": "e957fa9736d32648edf7ce2bee613cb5"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/11/1.png",
    "revision": "f9d7a76f146c7041674ed91b085ce8fc"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/11/2.png",
    "revision": "16af937923443293561ea0f4a447f2b3"
  },
  {
    "url": "assets/sword-offer-by-JavaScript/11/3.png",
    "revision": "b960770a4efd40074928584f14e7ecf9"
  },
  {
    "url": "axios/01.写在最前面.html",
    "revision": "6450d801e8817438f8a47077648e8a11"
  },
  {
    "url": "axios/02.项目起手，跑通流程.html",
    "revision": "30069489d439a3dfe4c617866d20feff"
  },
  {
    "url": "axios/03.实现基础功能：处理get请求url参数.html",
    "revision": "4713675c5a87d69259e3ffc02f536964"
  },
  {
    "url": "axios/04.实现基础功能：处理post请求参数.html",
    "revision": "29d3f4ed28d08385bf72e57b5777820f"
  },
  {
    "url": "axios/05.实现基础功能：处理请求的header.html",
    "revision": "8bb008f5c94c202d1c02081c084265aa"
  },
  {
    "url": "axios/06.实现基础功能：获取响应数据.html",
    "revision": "958bbe628ffb0aa6bfe4333c3c86c6d2"
  },
  {
    "url": "axios/07.实现基础功能：处理响应header.html",
    "revision": "08fd607b04fb01d994455a9367f53820"
  },
  {
    "url": "axios/08.实现基础功能：处理响应data.html",
    "revision": "6f38080294ac96726062b140947df2d7"
  },
  {
    "url": "axios/09.异常处理：基础版.html",
    "revision": "90e8e5158d3625365039970a02c8c370"
  },
  {
    "url": "axios/10.异常处理：增强版.html",
    "revision": "5331c51fd218c8e054502a1468a57626"
  },
  {
    "url": "axios/11.接口扩展.html",
    "revision": "9f88db4483c035be366ec49dd05dcbb9"
  },
  {
    "url": "axios/12.增加参数.html",
    "revision": "f3eed1b6ac45050263d74538f8b62b8c"
  },
  {
    "url": "axios/13.让响应数据支持泛型.html",
    "revision": "137a5f01e36677e131f195650496b59e"
  },
  {
    "url": "axios/14.实现拦截器.html",
    "revision": "c2090b4136188006013c677ebcd0a260"
  },
  {
    "url": "axios/15.默认配置.html",
    "revision": "defabc058cfc847f351e1042381c2313"
  },
  {
    "url": "axios/16.请求和响应数据配置化.html",
    "revision": "8b44566bb89715ecf74c0be0769db23d"
  },
  {
    "url": "axios/17.增加axios.create接口.html",
    "revision": "27b6b0068809b7c1a43774fbe64e52d8"
  },
  {
    "url": "axios/18.请求取消功能：总体思路.html",
    "revision": "087f790b3d9efa8d753b6393c4cdfa79"
  },
  {
    "url": "axios/19.请求取消功能：实现第二种使用方式.html",
    "revision": "133abac9446694160ad68b8255070ab7"
  },
  {
    "url": "axios/20.请求取消功能：实现第一种使用方式.html",
    "revision": "fa90b133bffaf3de84ff6c03e91433e7"
  },
  {
    "url": "axios/21.请求取消功能：添加axios.isCancel接口.html",
    "revision": "aeb08924a4b3d34695c13fb7f5541d4b"
  },
  {
    "url": "axios/22.请求取消功能：收尾.html",
    "revision": "bd243f2db9e6e699f3eb63f4c3fc13d4"
  },
  {
    "url": "axios/23.添加withCredentials属性.html",
    "revision": "13a1d310321f4ad2dd4582c2e484953b"
  },
  {
    "url": "axios/24.防御XSRF攻击.html",
    "revision": "8fdbab1b5fe7126d9cded88c6705e4c3"
  },
  {
    "url": "axios/25.文件上传下载进度监控.html",
    "revision": "9a8714e12786399e25efd4e440a0d856"
  },
  {
    "url": "axios/26.添加HTTP授权auth属性.html",
    "revision": "489234cc40d8887b0759bb4cb2681bee"
  },
  {
    "url": "axios/27.添加请求状态码合法性校验.html",
    "revision": "ce94587866b3fc66c366c63ce902a34d"
  },
  {
    "url": "axios/28.自定义序列化请求参数.html",
    "revision": "ae4c8d507d012e21817eff096b8f2ecf"
  },
  {
    "url": "axios/29.添加baseURL.html",
    "revision": "cc030b71484412a41c9511c1100cfa78"
  },
  {
    "url": "axios/30.添加axios.getUrl方法.html",
    "revision": "6a7f585b2bc365cdc379e9ff89e96a0a"
  },
  {
    "url": "axios/31.添加axios.all和axios.spread方法.html",
    "revision": "5a464cac16bd43e3fe72fd7eb277c9b9"
  },
  {
    "url": "axios/32.写在最后面.html",
    "revision": "931e7f3a571da4d295bd18f673153816"
  },
  {
    "url": "data-structure/01.原生JS实现栈结构.html",
    "revision": "79b5c409042341ae309b39f90be132aa"
  },
  {
    "url": "data-structure/02.原生JS实现队结构.html",
    "revision": "309fb5ed6c88199f31a9179b18568a9a"
  },
  {
    "url": "data-structure/03.原生JS实现单向链表.html",
    "revision": "da6daa7dad6f49cf4101f82c481816bc"
  },
  {
    "url": "data-structure/04.原生JS实现双向链表.html",
    "revision": "9d174ebfe2338e1be9d9950fad84e4d8"
  },
  {
    "url": "data-structure/05.原生JS实现二叉搜索树.html",
    "revision": "1dbe1a85b75fa2d622484925dee1b26e"
  },
  {
    "url": "data-structure/06.原生JS实现集合结构.html",
    "revision": "09bdc0549e24103f3905389e81e7a944"
  },
  {
    "url": "index.html",
    "revision": "eb7ae201afca94cf08b374514b43b745"
  },
  {
    "url": "javascript/01.原生JS封装_new函数，实现new关键字的功能.html",
    "revision": "47cb79a4101ad4c12bafef6aee2861ff"
  },
  {
    "url": "javascript/02.通俗易懂了解函数的防抖和节流.html",
    "revision": "19da3e3bccb23acf6e686c1d4c5f57c3"
  },
  {
    "url": "javascript/03.原生JS实现call,apply,bind函数.html",
    "revision": "eecc1204cbfbf36a3a1acaa2620ac78c"
  },
  {
    "url": "javascript/04.javaScript中this到底指向谁.html",
    "revision": "315103c7936ed6375efce56eb4422bfa"
  },
  {
    "url": "javascript/05.JavaScript中继承的多种方式和优缺点.html",
    "revision": "ace4d0efaef98a23f2276184f3fc056c"
  },
  {
    "url": "koa2/00.前言.html",
    "revision": "8a3c04614ad2cf017bbc3b8e1cecfdd5"
  },
  {
    "url": "koa2/01.环境准备.html",
    "revision": "8a98a497f5e743b65bd80986346b8fe6"
  },
  {
    "url": "koa2/02.中间件.html",
    "revision": "dfe6af5b48ada4c674acc3b1f60e7a73"
  },
  {
    "url": "koa2/03.路由.html",
    "revision": "67eb519a660225cd353ce4d37f79c17d"
  },
  {
    "url": "koa2/04.解析请求参数.html",
    "revision": "1b0d886411af78861aa39bbf700d1d89"
  },
  {
    "url": "koa2/05.数据库.html",
    "revision": "3645110566c394e983bddc4f253014b0"
  },
  {
    "url": "koa2/06.代码分层.html",
    "revision": "a15dde195946ca9281d60e99ce0ef18f"
  },
  {
    "url": "koa2/07.接口鉴权.html",
    "revision": "904857217703d068b79ab6aa8795a9c2"
  },
  {
    "url": "koa2/08.错误处理.html",
    "revision": "e0613b20cd95b665866bb771376b20a8"
  },
  {
    "url": "learn-vue-source-code/BuiltInComponents/keep-alive.html",
    "revision": "e00f00fd6e8a1bd897e7df0c980d6b49"
  },
  {
    "url": "learn-vue-source-code/complie/codegen.html",
    "revision": "ae20f28eb66e720e5110c652d5670daa"
  },
  {
    "url": "learn-vue-source-code/complie/HTMLParse.html",
    "revision": "3e4366401c1b2399e1b0461433cc20ad"
  },
  {
    "url": "learn-vue-source-code/complie/index.html",
    "revision": "9729734b45aaac21bb90f567331d589e"
  },
  {
    "url": "learn-vue-source-code/complie/optimize.html",
    "revision": "d68f6e7c130ab442416ccad7d07be4d8"
  },
  {
    "url": "learn-vue-source-code/complie/parse.html",
    "revision": "439ec272f7770884afd0b041860ba065"
  },
  {
    "url": "learn-vue-source-code/complie/summary.html",
    "revision": "c1bb527705bc33f7d18c58ad4c1e4016"
  },
  {
    "url": "learn-vue-source-code/complie/textParse.html",
    "revision": "fa53d3c7a1d707103cf68ef5f15c2580"
  },
  {
    "url": "learn-vue-source-code/directives/customDirectives.html",
    "revision": "41c8877042653c359177ae154074cbb5"
  },
  {
    "url": "learn-vue-source-code/filter/filterPrinciple.html",
    "revision": "700069d033bd7fbfdfd948362ed8a74e"
  },
  {
    "url": "learn-vue-source-code/filter/index.html",
    "revision": "e291135283ff0630cdfe65678241bfc4"
  },
  {
    "url": "learn-vue-source-code/filter/parseFilters.html",
    "revision": "87b9a0d082deddd0642067de97ac01b8"
  },
  {
    "url": "learn-vue-source-code/globalAPI/index.html",
    "revision": "6f8f82e7aa42f93892ecc27e628b40cb"
  },
  {
    "url": "learn-vue-source-code/instanceMethods/data.html",
    "revision": "25d54e0fd3766de2f9de74a4f5931003"
  },
  {
    "url": "learn-vue-source-code/instanceMethods/event.html",
    "revision": "b64b96ca3766038c0c58f5c5461a58bf"
  },
  {
    "url": "learn-vue-source-code/instanceMethods/lifecycle.html",
    "revision": "ff9b8e5fdc3a6bc5fbf77f0390f8f018"
  },
  {
    "url": "learn-vue-source-code/lifecycle/destory.html",
    "revision": "f543ab8fa19a139bc8e41d2d3ffa68fb"
  },
  {
    "url": "learn-vue-source-code/lifecycle/index.html",
    "revision": "80223ce4eb1ae24418e96a6aaeead518"
  },
  {
    "url": "learn-vue-source-code/lifecycle/initEvents.html",
    "revision": "d4ef5f3c43508cfd3fb57618b7429791"
  },
  {
    "url": "learn-vue-source-code/lifecycle/initInjections.html",
    "revision": "8f0cf22e8981b97ccbf617ebdce84174"
  },
  {
    "url": "learn-vue-source-code/lifecycle/initLifecycle.html",
    "revision": "5aa75630b6df6ec45b9e726b24381646"
  },
  {
    "url": "learn-vue-source-code/lifecycle/initState.html",
    "revision": "e0700969ae220d6d243a37eeffcbcc22"
  },
  {
    "url": "learn-vue-source-code/lifecycle/mount.html",
    "revision": "2ad11e02196c62e64320cb39b126582b"
  },
  {
    "url": "learn-vue-source-code/lifecycle/newVue.html",
    "revision": "350b270e5846302102018b42e0c04973"
  },
  {
    "url": "learn-vue-source-code/lifecycle/templateComplie.html",
    "revision": "0465a2297e14ea28230075eac244ca5f"
  },
  {
    "url": "learn-vue-source-code/reactive/array.html",
    "revision": "83cefb669c9085f8013fb10c15be0ff7"
  },
  {
    "url": "learn-vue-source-code/reactive/index.html",
    "revision": "cba268d7d4fb976b38137692e1075899"
  },
  {
    "url": "learn-vue-source-code/reactive/object.html",
    "revision": "6af614b4a1d26a66bdcb4d95428de291"
  },
  {
    "url": "learn-vue-source-code/start/index.html",
    "revision": "33acfd4a3fd8df931a8c6822c171f9fc"
  },
  {
    "url": "learn-vue-source-code/virtualDOM/index.html",
    "revision": "c6d531929a8e0d1ef5881ae9ee3179c6"
  },
  {
    "url": "learn-vue-source-code/virtualDOM/optimizeUpdataChildren.html",
    "revision": "53763a39b09dc4be6093783788d33ad4"
  },
  {
    "url": "learn-vue-source-code/virtualDOM/patch.html",
    "revision": "9e79390f53487b8b2a593230f3426b31"
  },
  {
    "url": "learn-vue-source-code/virtualDOM/updataChildren.html",
    "revision": "1031a6803c247b9e9bfe1666912e5336"
  },
  {
    "url": "logo.png",
    "revision": "d735114f7130dedf3c59058c8303a402"
  },
  {
    "url": "react/01.React基础.html",
    "revision": "cdea037c3ecc9c932c01bd34ec936551"
  },
  {
    "url": "sword-offer-by-JavaScript/01.栈的压入、弹出序列.html",
    "revision": "7966d74e7d12b52ac9f999ca9fb8cbcb"
  },
  {
    "url": "sword-offer-by-JavaScript/02.用两个栈实现队列.html",
    "revision": "38ab69add86aa49146374434cf1180d0"
  },
  {
    "url": "sword-offer-by-JavaScript/03.调整数组顺序使奇数位于偶数前面.html",
    "revision": "089584f27d709dd9fda5d91a224d3ef6"
  },
  {
    "url": "sword-offer-by-JavaScript/04.包含min函数的栈.html",
    "revision": "5f1b3bb8e827612b9b91f4f7aa1c1753"
  },
  {
    "url": "sword-offer-by-JavaScript/05.从尾到头打印链表.html",
    "revision": "f42f1c23773fbf3e162cfa8d138f4850"
  },
  {
    "url": "sword-offer-by-JavaScript/06.二维数组中的查找.html",
    "revision": "c21ec7e7c7b6194b4b0eb854bf62bd80"
  },
  {
    "url": "sword-offer-by-JavaScript/07.合并两个排序的链表.html",
    "revision": "ea41a6d11d9d640bbf45096bdc0afd41"
  },
  {
    "url": "sword-offer-by-JavaScript/08.旋转数组的最小数字.html",
    "revision": "bd47288286fb56c76c8d272f5cef938e"
  },
  {
    "url": "sword-offer-by-JavaScript/09.链表中倒数第k个结点.html",
    "revision": "ad7638b9d419d92aee2cbee80db0e1f6"
  },
  {
    "url": "sword-offer-by-JavaScript/10.两个链表的第一个公共结点.html",
    "revision": "d51a5d1bcab64f2ecacbc43338287543"
  },
  {
    "url": "sword-offer-by-JavaScript/11.反转链表.html",
    "revision": "428429d7114c12e5d9bd02bcfa215961"
  },
  {
    "url": "typescript/advanced/01.工具类型.html",
    "revision": "f83b117b6251e4510c7997cb8c71fe1f"
  },
  {
    "url": "typescript/basic/01.基础类型.html",
    "revision": "237bf734a0629608ccfad9333c9625bc"
  },
  {
    "url": "typescript/basic/02.接口.html",
    "revision": "b19e7227eae8d5f6bc998c14c168ba37"
  },
  {
    "url": "typescript/basic/03.类.html",
    "revision": "c0a736fbe0f010784559079c7f5ede35"
  },
  {
    "url": "typescript/basic/04.函数.html",
    "revision": "754e93208f34c5270a2e392fb4553026"
  },
  {
    "url": "typescript/basic/05.泛型.html",
    "revision": "d0d41cc3d01667d316202c0b5546c1f4"
  },
  {
    "url": "typescript/basic/06.其他.html",
    "revision": "da47047075db03eee2fc28f5bc8867ed"
  },
  {
    "url": "webpack/01.常用的webpack优化方法.html",
    "revision": "b618b1c85d46345a1276feeebbf2fe65"
  },
  {
    "url": "webpack/02.从0开始编写webpack插件.html",
    "revision": "d6bf4ac2a1d9965da714597a732d9e1d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
