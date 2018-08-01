
**Integrate**
	
 1. **Main**
	- React	v16.4.0
	- Redux	v4.0.0
	- Saga v0.16.0
	- React Router v4.2.2
  - Fontawesome v0.1.0-11
  - Theme Material-UI v1.4.2
  - API call ( axios v0.18.0 )
  - Build CSS ( SASS node-sass-chokidar v1.3.0 )
  - Support multiple language ( react-intl v2.4.0)
  - Socket ( socketcluster-client v13.0.0 )

 2. **Extra**
	 - Lodash v4.17.10
	 - Immutable v3.8.2
	 - Reselect v3.0.1
	 - React-helmet v5.2.0

**Configuration**

 1. ***Scalable project***

> const  AsyncHome  =  asyncComponent(() =>  import('../components/Home'));

 3. ***Genarate new language***

> npm run generate

 3. ***Update language***

> npm run extract-intl


**Build & Deploy**

 - ***Build***

> **Environment production**
> yarn build:production

- **Deploy**
 
> **Environment dev**
> yarn start:dev
