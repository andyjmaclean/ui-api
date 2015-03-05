# Development

Quick overview to get front-end developers started.

   

## Adding a new molecule

New atoms, molecules etc are developed under:

```
  /app/views/components/[atoms | molecules | etc]

```
   


To display the new component you need to add a page to the styleguide here:


```
  /app/views/styleguide/[atoms | molecules | etc]

```
   


To link the new component (styleguide page) to the styleguide menus you need to edit this file:

```
  /app/data/styleguide/left_nav.yml

```
   



## Adding a new folder

If you want to develop a component in a folder that doesn't yet exist (i.e. 'my-molecules') then you'll need to create it:

```
  cd /app/views/components/
  mkdir my-molecules

```
  
and bind it to the secondary navigation by editing this file:

```
app/data/styleguide/secondary_nav.yml

```


Entries under 'secondary_nav' take a title and a slug, so in this case the edit would look like this:

```
-
  :title: "My Molecules"
  :slug: "/my-molecules"

```

which would require the following new route to be added to routes.rb
 
```
  get 'styleguide/my-molecules', to: redirect('/styleguide/my-molecules/my-page-name')

```
  

where 'my-page-name' refers to a page you create in the styleguide to view component:

```
  /app/views/styleguide/my-molecules/my-page-name.html.haml

```
  

the component itself living here:

```
  /app/views/components/my-components

```
  


