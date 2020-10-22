# react-native-circle-view

Circle wrapper for your content.

Props -> radius, content, style, modify_style

radius: 
radius of circle area, set default to 50

content -> you should send what you want to have in circle view

you can use a function to return just a text or a view containing many other things.

renderV() {
    return <Text>Deneme yazisi</Text>;
  }

content={this.renderV()}

style:
if you dont want to use default styles.circle in code use this.

modify_style:
if you just want to change something in default styles.circle or add something you can use this prop and you will keep default style's features same or modify the part you redeclare in modify_style.

and because this is a circle view height, borderRadius, width props depend on radius so you cant redeclare this props in style or modify_style. radius is enough to change them.
