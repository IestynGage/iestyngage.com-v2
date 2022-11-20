# personal-link

A website including all the links relating to me. Project inspired by [projectbook](https://projectbook.code.brettchalupa.com/websites/link-list.html)

## Develpment

### Pre-requisites

You will need:
* Node
* Yarn

### Getting started

Run the following commands to clone the project and download it's dependencies.
```shell
 $ git clone ...
 $ cd personal-links/
 $ yarn
```

## scripts

### yarn build
Looks at the source files to create the static site and places them in the public package

### yarn start
Serves the site at `http://localhost:8080/` and watches for any changes in the project
so that it can re-generate the site.

### yarn clean-build
Deletes the public package and re-generates the site and outputing the files into a new public folder