WAT-Health
====== 

An online, community powered forum for helping people tackle mental health issues and connect to people who are going through similar issues. 


Also offers analytical  tools and helplines for immediate assistance and resources for dealing with emergency crisis.

Login Screen:

![Login Screen](/WAT-Health/images/1_login.png)


User Dashboard / Analytics Page

![Analytics Page](/WAT-Health/images/3_AnalyticsPage.png)

## The Problem Space

While researching about the stigma behind talking openly about mental health issue, we found that some major problems that people face are: fear and shame of feeling weak, lack of awareness even with abundant resources, and the lack of a community who share the same problems to discuss these issues.

## How we tackle it
WATHealth aims to tackle all these problems by offering complete **anonymity** by default, using Natural Language Processing Tools like the **Watson API** to examine the content a user interacts with to understand if a user needs immediate help, a unique **Buddy** system where users are assigned a random partner who shares the same problems to discuss their issues and help each other. We also offer ready **resources** on our page for users and an emergency **Get Help!** button to get immediate assistance. Users can also talk directly to our representatives from a **Contact Us** button

## What are the problems with existing solutions?
Stigma behind openly talking about mental health issues with the lack of awareness and readily available resources. Lack of a community to share problems with no direct connection to professionals.

## How we are special
This is completely free with no hidden costs while it is 100% anonymous. A unique 'buddy' system to assign people to partners for support. A community of people who share the same issues. Directly sending your data to professionals and using the power of data. 

## Future Additions

### Doctor Connect 
Directly sending all of your data from surveys and the content you interact with to medical professionals who can help. 

### In-House message platform
Create an on-platform messaging service to incorporate an added level of privacy and also so you can be able to monitor those messages for keywords that indicate needing immediate help.

### Post Filtering.
Incorporated an automatic post filtering system which removes obscene words and troll users. Used NLP and keyword search to accomplish this.  

## Installation

To run this, you will need to ```npm install``` and have Vue installed.

Note: Firebase works with Node 10, but not Node 12

It becomes easiest when you have the `LiveServer` extension in `vscode`.

```
npm install -g firebase-tools
```

```
firebase login
```

> A Vue.js project

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### Deploy to Firebase
```bash
firebase deploy
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


- firebase deploy --only functions
return the promise https://firebase.google.com/docs/functions/terminate-functions