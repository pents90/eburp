# -----------------------------------------------------------------------------
#
# Contains the core utlities and UI elements that are used to construct the
# game, but nothing to do with the game itself.
#
# -----------------------------------------------------------------------------
#
# Copyright (C) 2013 by John Watkinson
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# -----------------------------------------------------------------------------

class Util

  @random: (min, max) ->
    diff = max - min + 1
    Math.floor(Math.random() * diff) + min

  @randomChance: (num, den) ->
    Math.random() * den < num

  @randomElement: (array) ->
    n = array.length
    x = Util.random(0, n-1)
    array[x]

  @isEmpty: (object) ->
    for x, y of object
      return false
    true

  @statRoll: ->
    Util.random(1,6) + Util.random(1,6) + Util.random(1,6)

  @shuffle: (a) ->
    b = a.length
    while (b)
      c = Math.floor(Math.random() * b)
      d = a[--b]
      a[b] = a[c]
      a[c] = d
    a

  @hasAllProperties: (obj, properties) ->
    if (properties instanceof Array)
      for a in properties
        if (!obj[a])
          return false
    else
      if (!obj[properties])
        return false
    true

  @hasCommonElements: (array1, array2) ->
    array1 = [].concat(array1)
    array2 = [].concat(array2)
    for a in array1
      for b in array2
        if (a == b)
          return true
    false

  @hasElement: (array, element) ->
    for a in array
      if (a == element)
        return true
    false

  @indexOfElement: (array, element) ->
    index = 0
    for a in array
      if (a == element)
        return index
      index++
    -1

  @trunc: (x) ->
    x | 0

  @create2DArray: (width, height) ->
    a = []
    for y in [0 ... height]
      b = []
      a.push(b)
      for x in [0 ... width]
        b.push([])
    a

  @removeElement: (array, element) ->
    index = 0
    for a in array
      if (a == element)
        array.splice(index, 1)
        return true
      index++
    false

  @copyProperties: (source, dest) ->
    for k,v of source
      dest[k] = v

  @rgb : (red, green, blue) ->
    {"red" : red, "green" : green, "blue" : blue}

  @blendColors : (color1, color2, p1, p2) ->
    red = Math.round(color1.red * p1 + color2.red * p2)
    green = Math.round(color1.green * p1 + color2.green * p2)
    blue = Math.round(color1.blue * p1 + color2.blue * p2)
    {"red" : red, "green" : green, "blue" : blue}

  @capitalize : (word) ->
    word.charAt(0).toUpperCase() + word.slice(1)

  @arrayToString : (array) ->
    if (!array or array.length == 0)
      null
    else
      first = true
      text = ""
      for item in array
        if (first)
          text += item
          first = false
        else
          text += ", " + item
      text

# -----------------------------------------------------------------------------

class Preloader

  @images: null
  @loadedCount: 0
  @addedCount: 0
  @images: {}
  @callback: null

  @reset: () =>
    Preloader.addedCount = 0
    Preloader.loadedCount = 0

  @imageLoaded: () =>
    Preloader.loadedCount++;
    console.log("Preloading loading finished: #{Preloader.loadedCount}/#{Preloader.addedCount} done.")
    if (Preloader.loadedCount + 1 == Preloader.addedCount and Preloader.callback)
      console.log("Preloading calling back.")
      Preloader.callback()

  @load: (src) =>
    console.log("Loading '#{src}'")
    if (!Preloader.images[src])
      Preloader.addedCount++
      console.log("Add count now #{Preloader.addedCount}")
      item = new Image()
      Preloader.images[src] = item
      item.onload=Preloader.imageLoaded
      item.src = src
      item
    else
      console.log("Already loaded.")
      Preloader.images[src]

  @setCallback: (callback) =>
    console.log("Preloader callback set.")
    Preloader.callback = callback
    if (Preloader.loadedCount == Preloader.addedCount)
      callback()

  @getImage: (src) =>
    item = Preloader.images[src]
    if (!item)
      item = Preloader.load(src)
    item

# -----------------------------------------------------------------------------

class Font

  image: null
  fontHeight: 0

  constructor: (@glyphMap, imageSrc) ->
    @image = Preloader.getImage(imageSrc)
    @fontHeight = @glyphMap['A'].height

  drawChar: (ctx, c, x, y) =>
    glyph = @glyphMap[c]
    xx = x * Screen.SCALE;
    yy = y * Screen.SCALE;
    ctx.drawImage(@image, Screen.SCALE * glyph.x, Screen.SCALE * glyph.y, Screen.SCALE * glyph.width, Screen.SCALE * glyph.height, xx, yy, Screen.SCALE * glyph.width, Screen.SCALE * glyph.height)
    glyph.width

  drawText: (ctx, text, color, x, y) =>
    n = text.length
    width = 0;
    for i in [0 ... n]
      width += @glyphMap[text.charAt(i)].width
    ctx.fillStyle = color
    ctx.fillRect(x * Screen.SCALE, y * Screen.SCALE, width * Screen.SCALE, @fontHeight * Screen.SCALE)
    for i in [0 ... n]
      x += @drawChar(ctx, text.charAt(i), x, y)
    text

  getWidth: (text) =>
    n = text.length
    width = 0;
    for i in [0 ... n]
      width += @glyphMap[text.charAt(i)].width
    width

  centerText: (ctx, text, color, x, y, w, h) =>
    width = @getWidth(text)
    offsetX = Math.floor((w - width) / 2)
    offsetY = Math.floor((h - @fontHeight) / 2)
    @drawText(ctx, text, color, x + offsetX, y + offsetY)

  wrapText: (ctx, text, color, x, y, width) =>
    n = text.length
    start = 0
    last = 0
    i = 0
    w = 0
    totalLines = 1
    while (i < n)
      breakLine = false
      force = false
      newLine = false
      c = text.charAt(i)
      if (c == ' ')
        last = i
      else if (c == '\n')
        last = i
        breakLine = true
        newLine = true
      if (!breakLine)
        w += @glyphMap[text.charAt(i)].width
        if (w > width)
          breakLine = true
      if (breakLine)
        if (last == start and !newLine)
          last = i
          force = true
        line = text.substring(start, last)
        @drawText(ctx, line, color, x, y)
        y += @fontHeight
        totalLines++
        if (force)
          start = last
        else
          start = last + 1
        last = start
        i = start
        w = 0
      else
        i++
    if (start < n - 1)
      line = text.substring(start)
      @drawText(ctx, line, color, x, y)
    totalLines * @fontHeight

# -----------------------------------------------------------------------------

class Screen

  @SCALE : pixelWidth
  @SIZE : 128
  @GURK_BLUE : "#004c62"
  @UNIT : 16
  @HALF_UNIT : Screen.UNIT / 2
  @WIN_SIZE : 9
  @CENTER_OFFSET : 0
  @ICONS_PER_ROW : 7

  icons : null
  screen : null

  @MICRO_GLYPHS : {
      'A' : {x : 0, y : 0, width: 5, height: 8},
      'B' : {x : 5, y : 0, width: 5, height: 8},
      'C' : {x : 10, y : 0, width: 4, height: 8},
      'D' : {x : 14, y : 0, width: 5, height: 8},
      'E' : {x : 19, y : 0, width: 4, height: 8},
      'F' : {x : 23, y : 0, width: 4, height: 8},
      'G' : {x : 27, y : 0, width: 5, height: 8},
      'H' : {x : 32, y : 0, width: 5, height: 8},
      'I' : {x : 37, y : 0, width: 4, height: 8},
      'J' : {x : 41, y : 0, width: 5, height: 8},
      'K' : {x : 46, y : 0, width: 5, height: 8},
      'L' : {x : 51, y : 0, width: 4, height: 8},
      'M' : {x : 55, y : 0, width: 6, height: 8},
      'N' : {x : 61, y : 0, width: 5, height: 8},
      'O' : {x : 66, y : 0, width: 5, height: 8},
      'P' : {x : 71, y : 0, width: 5, height: 8},
      'Q' : {x : 76, y : 0, width: 5, height: 8},
      'R' : {x : 81, y : 0, width: 5, height: 8},
      'S' : {x : 86, y : 0, width: 5, height: 8},
      'T' : {x : 91, y : 0, width: 4, height: 8},
      'U' : {x : 95, y : 0, width: 5, height: 8},
      'V' : {x : 100, y : 0, width: 5, height: 8},
      'W' : {x : 105, y : 0, width: 6, height: 8},
      'X' : {x : 111, y : 0, width: 5, height: 8},
      'Y' : {x : 116, y : 0, width: 5, height: 8},
      'Z' : {x : 121, y : 0, width: 4, height: 8},
      'a' : {x : 0, y : 8, width: 5, height: 8},
      'b' : {x : 5, y : 8, width: 5, height: 8},
      'c' : {x : 10, y : 8, width: 4, height: 8},
      'd' : {x : 14, y : 8, width: 5, height: 8},
      'e' : {x : 19, y : 8, width: 5, height: 8},
      'f' : {x : 24, y : 8, width: 4, height: 8},
      'g' : {x : 28, y : 8, width: 5, height: 8},
      'h' : {x : 33, y : 8, width: 5, height: 8},
      'i' : {x : 38, y : 8, width: 2, height: 8},
      'j' : {x : 40, y : 8, width: 3, height: 8},
      'k' : {x : 43, y : 8, width: 5, height: 8},
      'l' : {x : 48, y : 8, width: 2, height: 8},
      'm' : {x : 50, y : 8, width: 6, height: 8},
      'n' : {x : 56, y : 8, width: 5, height: 8},
      'o' : {x : 61, y : 8, width: 5, height: 8},
      'p' : {x : 66, y : 8, width: 5, height: 8},
      'q' : {x : 71, y : 8, width: 5, height: 8},
      'r' : {x : 76, y : 8, width: 4, height: 8},
      's' : {x : 80, y : 8, width: 5, height: 8},
      't' : {x : 85, y : 8, width: 4, height: 8},
      'u' : {x : 89, y : 8, width: 5, height: 8},
      'v' : {x : 94, y : 8, width: 5, height: 8},
      'w' : {x : 99, y : 8, width: 6, height: 8},
      'x' : {x : 105, y : 8, width: 4, height: 8},
      'y' : {x : 109, y : 8, width: 5, height: 8},
      'z' : {x : 114, y : 8, width: 5, height: 8},
      '#' : {x : 119, y : 8, width: 6, height: 8},
      '1' : {x : 0, y : 17, width: 3, height: 8},
      '2' : {x : 3, y : 17, width: 5, height: 8},
      '3' : {x : 8, y : 17, width: 5, height: 8},
      '4' : {x : 13, y : 17, width: 5, height: 8},
      '5' : {x : 18, y : 17, width: 5, height: 8},
      '6' : {x : 23, y : 17, width: 5, height: 8},
      '7' : {x : 28, y : 17, width: 5, height: 8},
      '8' : {x : 33, y : 17, width: 5, height: 8},
      '9' : {x : 38, y : 17, width: 5, height: 8},
      '0' : {x : 43, y : 17, width: 5, height: 8},
      ',' : {x : 48, y : 17, width: 3, height: 8},
      '.' : {x : 51, y : 17, width: 2, height: 8},
      '?' : {x : 53, y : 17, width: 5, height: 8},
      '!' : {x : 58, y : 17, width: 2, height: 8},
      "'" : {x : 60, y : 17, width: 2, height: 8},
      '"' : {x : 65, y : 17, width: 4, height: 8},
      '/' : {x : 69, y : 17, width: 6, height: 8},
      '(' : {x : 81, y : 17, width: 3, height: 8},
      ')' : {x : 84, y : 17, width: 3, height: 8},
      '[' : {x : 87, y : 17, width: 3, height: 8},
      ']' : {x : 90, y : 17, width: 3, height: 8},
      ':' : {x : 103, y : 17, width: 2, height: 8},
      '-' : {x : 105, y : 17, width: 4, height: 8},
      '*' : {x : 109, y : 17, width: 4, height: 8},
      '+' : {x : 114, y : 17, width: 4, height: 8},
      ' ' : {x : 122, y : 17, width: 4, height: 8},
      '~' : {x : 0, y : 25, width: 10, height: 8}, # Move icon
      '`' : {x : 10, y : 25, width: 6, height: 8}, # Attack icon
      '=' : {x : 16, y : 25, width: 4, height: 8}, # Full spell
      '|' : {x : 20, y : 25, width: 4, height: 8}  # Half spell
    }

  @FONT : null

  constructor: (@ctx) ->
    Screen.FONT = new Font(Screen.MICRO_GLYPHS, "font_micro" + Screen.SCALE + ".png")
    @icons = [
        Preloader.getImage("icons0-" + Screen.SCALE + ".png"),
        Preloader.getImage("icons1-" + Screen.SCALE + ".png")
      ]
    @screen = Preloader.getImage("screen" + Screen.SCALE + ".png")
    Screen.CENTER_OFFSET = Math.floor(Screen.WIN_SIZE / 2);

  clear: =>
    @clearColor("#000")

  clearColor: (color) =>
    @ctx.fillStyle = color
    @ctx.fillRect(0, 0, Screen.WIN_SIZE * Screen.UNIT * Screen.SCALE, Screen.WIN_SIZE * Screen.UNIT * Screen.SCALE)

  drawScreen: =>
    @ctx.drawImage(@screen, 0, 0)

  drawIcon: (icon, x, y) =>
    coords = Icons[icon];
    k = Screen.UNIT * Screen.SCALE
    @ctx.drawImage(@icons[coords.block], k * coords.x, k * coords.y, k, k, x * Screen.SCALE, y * Screen.SCALE, k, k)

  drawImage: (image, x, y) =>
    @ctx.drawImage(image, x * Screen.SCALE, y * Screen.SCALE)

  drawAnim: (anim, x, y, frame) =>
    coords = Icons[anim];
    ix = coords.x
    iy = coords.y
    k = Screen.UNIT * Screen.SCALE
    m = @icons[coords.block].width / k
    for i in [0...frame]
      ix++
      if (ix == m)
        ix = 0
        iy++
    @ctx.drawImage(@icons[coords.block], k * ix, k * iy, k, k, x * Screen.SCALE, y * Screen.SCALE, k, k)

  drawCustomAnim: (custom, x, y) =>
    k = Screen.UNIT * Screen.SCALE
    @ctx.drawImage(custom, (x - 2) * Screen.SCALE, (y - 2) * Screen.SCALE)

  drawText: (text, color, x, y) =>
    Screen.FONT.drawText(@ctx, text, color, x, y)

  drawTextCentered: (text, color, x, y, width, height) =>
    Screen.FONT.centerText(@ctx, text, color, x, y, width, height)

  wrapText: (text, color, x, y, width) =>
    Screen.FONT.wrapText(@ctx, text, color, x, y, width)

  setAlpha: (alpha) =>
    @ctx.globalAlpha = alpha

  drawPixel: (color, x, y) =>
    @ctx.fillStyle = color
    @ctx.fillRect(x * Screen.SCALE, y * Screen.SCALE, Screen.SCALE, Screen.SCALE)

  fillRect: (color, x, y, width, height) =>
    @ctx.fillStyle = color
    @ctx.fillRect(x * Screen.SCALE, y * Screen.SCALE, width * Screen.SCALE, height * Screen.SCALE)

# -----------------------------------------------------------------------------

class Button

  buttonOn : false
  text : null

  constructor: (@index, @x, @y) ->
    @text = "BLAM"

  draw: (ctx) =>
    image = if @buttonOn then ButtonGrid.onImage else ButtonGrid.offImage
    ctx.drawImage(image, Screen.SCALE * @x, Screen.SCALE * @y);
    if (@buttonOn)
      ButtonGrid.FONT.centerText(ctx, @text, "transparent", @x + 1, @y, ButtonGrid.BUTTON_WIDTH, ButtonGrid.BUTTON_HEIGHT)
    ctx.drawImage(ButtonGrid.topImage, Screen.SCALE * @x, Screen.SCALE * @y);
    false

  enable: =>
    @buttonOn = true

  disable: =>
    @buttonOn = false

  isEnabled: =>
    @buttonOn

  setText: (text) =>
    @text = text

class ButtonGrid

  @GURKOID_GLYPHS : {
      'A' : {x : 1, y : 1, width: 5, height: 9},
      'B' : {x : 6, y : 1, width: 5, height: 9},
      'C' : {x : 11, y : 1, width: 5, height: 9},
      'D' : {x : 16, y : 1, width: 5, height: 9},
      'E' : {x : 21, y : 1, width: 4, height: 9},
      'F' : {x : 25, y : 1, width: 4, height: 9},
      'G' : {x : 29, y : 1, width: 5, height: 9},
      'H' : {x : 34, y : 1, width: 5, height: 9},
      'I' : {x : 39, y : 1, width: 4, height: 9},
      'J' : {x : 43, y : 1, width: 4, height: 9},
      'K' : {x : 47, y : 1, width: 5, height: 9},
      'L' : {x : 52, y : 1, width: 5, height: 9},
      'M' : {x : 57, y : 1, width: 6, height: 9},
      'N' : {x : 63, y : 1, width: 6, height: 9},
      'O' : {x : 69, y : 1, width: 5, height: 9},
      'P' : {x : 74, y : 1, width: 5, height: 9},
      'Q' : {x : 79, y : 1, width: 5, height: 9},
      'R' : {x : 84, y : 1, width: 5, height: 9},
      'S' : {x : 89, y : 1, width: 5, height: 9},
      'T' : {x : 94, y : 1, width: 6, height: 9},
      'U' : {x : 100, y : 1, width: 5, height: 9},
      'V' : {x : 105, y : 1, width: 5, height: 9},
      'W' : {x : 110, y : 1, width: 6, height: 9},
      'X' : {x : 116, y : 1, width: 6, height: 9},
      'Y' : {x : 122, y : 1, width: 6, height: 9},
      'Z' : {x : 128, y : 1, width: 5, height: 9},
      '1' : {x : 133, y : 1, width: 8, height: 9},
      '2' : {x : 141, y : 1, width: 10, height: 9},
      '3' : {x : 151, y : 1, width: 8, height: 9},
      '4' : {x : 159, y : 1, width: 10, height: 9},
      '/' : {x : 169, y : 1, width: 2, height: 9},
      '.' : {x : 171, y : 1, width: 2, height: 9}
      ' ' : {x : 173, y : 1, width: 4, height: 9}
    }

  #@GRID_WIDTH : 160
  #@GRID_HEIGHT : 85
  @BUTTON_WIDTH : 45
  @BUTTON_HEIGHT : 23

  @FONT : null
  @onImage: null
  @offImage: null
  @topImage: null

  buttons : null

  constructor: (@ctx, @gurk) ->
    ButtonGrid.FONT = new Font(ButtonGrid.GURKOID_GLYPHS, "font_gurkoid" + Screen.SCALE + ".png")
    ButtonGrid.onImage = Preloader.getImage("button" + Screen.SCALE + ".png")
    ButtonGrid.offImage = Preloader.getImage("buttonoff" + Screen.SCALE + ".png")
    ButtonGrid.topImage = Preloader.getImage("buttontop" + Screen.SCALE + ".png")
    #gapWidth = (ButtonGrid.GRID_WIDTH - 3 * ButtonGrid.BUTTON_WIDTH) / 4
    #gapHeight = (ButtonGrid.GRID_HEIGHT - 3 * ButtonGrid.BUTTON_HEIGHT) / 2
    index = 1
    yy = GAP_Y
    @buttons = new Array(3)
    for y in [0..2]
      @buttons[y] = new Array(3)
      xx = GAP_X
      for x in [0..2]
        @buttons[y][x] = new Button(index, xx, yy)
        index++
        xx += ButtonGrid.BUTTON_WIDTH + GAP_X
      yy += GAP_Y + ButtonGrid.BUTTON_HEIGHT
    # Set up and enable the directional arrows
    @enableMovement()
    false

  draw: =>
    f = =>
      @ctx.clearRect(0, 0, Screen.SCALE * GRID_WIDTH, Screen.SCALE * GRID_HEIGHT)
      for y in [0..2]
        for x in [0..2]
          @buttons[y][x].draw(@ctx)
    f();
    if (drawHack)
      setTimeout(f, 50);
    false

  clicked: (e) =>
    #console.log("e.x: " + e.x + ", e.y: " + e.y)
    # todo - dead zones between buttons?
    x = Math.floor(e.x * 3 / Screen.SCALE / GRID_WIDTH)
    y = Math.floor(e.y * 3 / Screen.SCALE / GRID_HEIGHT)
    #console.log("X: " + x + ", Y: " + y)
    # if @buttons[y][x].isEnabled() then @buttons[y][x].disable() else @buttons[y][x].enable()
    # @draw()
    button = @buttons[y][x]
    if (button.buttonOn)
      @gurk.buttonPressed(@buttons[y][x].text)

  getButtonByKeyNum: (keyNum) =>
    keyNum--
    y = Math.floor(keyNum / 3)
    x = keyNum % 3
    @buttons[y][x]

  forceClick: (keyNum) =>
    button = @getButtonByKeyNum(keyNum)
    if (button.buttonOn)
      @gurk.buttonPressed(button.text)


  clear: =>
    for y in [0..2]
      for x in [0..2]
        @buttons[y][x].disable()
    @draw()

  enableMovement: =>
    @buttons[1][0].enable()
    @buttons[1][0].setText("1")
    @buttons[0][1].enable()
    @buttons[0][1].setText("2")
    @buttons[1][2].enable()
    @buttons[1][2].setText("3")
    @buttons[2][1].enable()
    @buttons[2][1].setText("4")
    @draw()

  # 1 2 3
  # 4 5 6
  # 7 8 9
  setButton: (keyNum, text) =>
    button = @getButtonByKeyNum(keyNum)
    button.setText(text)
    button.enable()
    @draw()

  setButtonByPosition: (x, y, text) =>
    button = @buttons[y][x]
    button.setText(text)
    button.enable()
    @draw()

  disableButtonByPosition: (x, y) =>
    button = @buttons[y][x]
    button.disable()
    @draw()

# -----------------------------------------------------------------------------

class View

  @LEFT : "1"
  @UP : "2"
  @RIGHT : "3"
  @DOWN : "4"

  buttons : null
  name : "No Name"

  constructor: (@screen, @gurk) ->
    @buttons = new Array(3)
    for y in [0..2]
      @buttons[y] = new Array(3)
      for x in [0..2]
        @buttons[y][x] = null
    true

  processResult: (result) =>
    # no-op, override to do something

  draw: =>
    f = =>
      @screen.clear()
      @doDraw()
      @screen.drawScreen()
    f();
    if (drawHack)
      setTimeout(f, 50);

  doDraw: =>

  doLayout: =>

  command: (text) =>
    # no-op

  setButtons: (grid) =>
    grid.clear()
    for y in [0..2]
      for x in [0..2]
        if (@buttons[y][x])
          grid.setButtonByPosition(x, y, @buttons[y][x])

  enableMovement: =>
    @buttons[1][0] = View.LEFT
    @buttons[0][1] = View.UP
    @buttons[1][2] = View.RIGHT
    @buttons[2][1] = View.DOWN
    if (@gurk.isCurrentView(this))
      @setButtons(@gurk.buttonGrid)

  @coords: (keyNum) =>
    keyNum--
    y = Math.floor(keyNum / 3)
    x = keyNum % 3
    [x, y]

  clearButton: (keyNum) =>
    [x, y] = View.coords(keyNum)
    @buttons[y][x] = null
    if (@gurk.isCurrentView(this))
      @gurk.buttonGrid.disableButtonByPosition(x, y)

  clearAllButtons : () =>
    for i in [1 .. 9]
      @clearButton(i)
    true

  setButton: (keyNum, text) =>
    [x, y] = View.coords(keyNum)
    @buttons[y][x] = text
    if (@gurk.isCurrentView(this))
      @gurk.buttonGrid.setButtonByPosition(x, y, text)

  getTextWidth : (text) =>
    Screen.FONT.getWidth(text)

# -----------------------------------------------------------------------------

class InfoView extends View

  icons : null
  labels : null
  doneVerb : null

  constructor: (gurk, doneVerb = "DONE") ->
    super(gurk.getScreen(), gurk)
    @icons = new Array()
    @labels = new Array()
    @doneVerb = doneVerb
    @setButton(5, @doneVerb)

  clear: =>
    @icons = new Array()
    @labels = new Array()

  addIcon: (icon, x, y) =>
    @icons.push({"icon" : icon, "x" : x, "y" : y})
    @icons.length - 1

  changeIcon: (index, icon) =>
    @icons[index].icon = icon

  addLabel: (text, color, x, y) =>
    @labels.push({"text" : text, "color": color, "x" : x, "y" : y})
    @labels.length - 1

  addLabelCentered: (text, color, x, y, width, height) =>
    w = Screen.FONT.getWidth(text)
    h = Screen.FONT.fontHeight
    xx = x + Math.floor((width - w) / 2)
    yy = y + Math.floor((height - h) / 2)
    @addLabel(text, color, xx, yy)

  doDraw: =>
    @screen.clearColor(Screen.GURK_BLUE)
    for icon in @icons
      @screen.drawIcon(icon.icon, icon.x, icon.y);
    for label in @labels
      @screen.drawText(label.text, label.color, label.x, label.y)

  command: (text) =>
    switch text
      when @doneVerb then @gurk.popView(null)

# -----------------------------------------------------------------------------

class SelectView extends InfoView

  @BASIC_COLOR : "#FFF"
  @SELECT_COLOR : "#0FF"

  options : null
  selected : 0
  selectVerb : null
  cancelVerb : null

  constructor: (gurk, selectVerb = "SELECT", cancelVerb = "CANCEL") ->
    super(gurk)
    @selectVerb = selectVerb
    @cancelVerb = cancelVerb
    @options = new Array()
    # Use up/down for selection
    @setButton(2, View.UP)
    @setButton(8, View.DOWN)
    @setButton(5, @selectVerb)
    if (@cancelVerb)
      @setButton(9, @cancelVerb)
    else
      @clearButton(9)

  clear: =>
    super();
    @options = new Array()

  start: =>
    if (@selected >= @options.length)
      @selected = 0
    if (@options.length > 0)
      @itemHighlighted(@selected, @options[@selected])

  setSelectVerb : (verb) =>
    @selectVerb = verb
    @setButton(5, @selectVerb)

  turnOffSelection : =>
    @clearButton(5)

  cancelled: =>
    # Override to respond to cancellation differently
    @gurk.popView(null)

  itemSelected: (index, item) =>
    # Override to respond to selection differently
    @gurk.popView(item)

  itemHighlighted: (index, item) =>
    # no-op, override to respond to highlight

  addOption: (text, color, x, y, highlightColor = SelectView.SELECT_COLOR) =>
    @options.push({"text" : text, "color": color, "highlightColor" : highlightColor, "x" : x, "y" : y})
    @options.length - 1

  changeOption: (index, text, color) =>
    option = @options[index]
    option.text = text
    option.color = color

  moveUp: =>
    if (@options.length > 0)
      @selected--
      if (@selected < 0)
        @selected = @options.length - 1
      @itemHighlighted(@selected, @options[@selected])
      @draw()

  moveDown: =>
    if (@options.length > 0)
      @selected++
      if (@selected >= @options.length)
        @selected = 0
      @itemHighlighted(@selected, @options[@selected])
      @draw()

  makeSelection: =>
    if (@options.length > 0)
      @itemSelected(@selected, @options[@selected])

  command: (text) =>
    switch text
      when View.UP then @moveUp()
      when View.DOWN then @moveDown()
      when @selectVerb then @makeSelection()
      when @cancelVerb then @cancelled()

  doDraw: =>
    super()
    @screen.clearColor(Screen.GURK_BLUE)
    for icon in @icons
      @screen.drawIcon(icon.icon, icon.x, icon.y);
    for label in @labels
      @screen.drawText(label.text, label.color, label.x, label.y)
    for option, i in @options
      color = if (i == @selected) then option.highlightColor else option.color
      @screen.drawText(option.text, color, option.x, option.y)

# -----------------------------------------------------------------------------

class AlertView extends View

  @ICON_X: 3
  @ICON_Y: 3
  @TITLE_Y: 7

  subtitle : null

  constructor: (gurk, @icon, @title, @text, @result, @altIcon = null) ->
    super(gurk.getScreen(), gurk)
    @setButton(5, "OK")

  doDraw: =>
    @screen.clearColor(Screen.GURK_BLUE)
    @screen.drawIcon(@icon, AlertView.ICON_X, AlertView.ICON_Y)
    if (@altIcon)
      @screen.drawIcon(@altIcon, Screen.SIZE - Screen.UNIT - AlertView.ICON_X, AlertView.ICON_Y)
    if (@subtitle)
      @screen.drawTextCentered(@title, "#FFF", 0, 1, Screen.SIZE, Screen.UNIT)
      @screen.drawTextCentered(@subtitle, "#A0A0A0", 0, 9, Screen.SIZE, Screen.UNIT)
    else
      @screen.drawTextCentered(@title, "#FFF", 0, AlertView.ICON_Y + 1, Screen.SIZE, Screen.UNIT)
    @screen.wrapText(@text, "#FFF", AlertView.ICON_X, AlertView.ICON_Y * 2 + Screen.UNIT, Screen.SIZE - 2 * AlertView.ICON_X)

  command: (text) =>
    switch text
      when "OK" then @gurk.popView(@result)

# -----------------------------------------------------------------------------

class FlowView extends AlertView

  @ICON_X: 3
  @ICON_Y: 3
  @TITLE_Y: 7

  paragraphs : null

  constructor: (gurk, icon, title, result, altIcon = null) ->
    super(gurk, icon, title, "", result, altIcon)
    @paragraphs = new Array()

  addParagraph : (text, color) =>
    @paragraphs.push({"text" : text, "color" : color})

  addGap : =>
    @paragraphs.push({"text" : null})

  doDraw : =>
    super()
    y = AlertView.ICON_Y * 2 + Screen.UNIT
    x = AlertView.ICON_X
    for paragraph in @paragraphs
      if (!paragraph.text)
        y += 4
      else
        y += @screen.wrapText(paragraph.text, paragraph.color, x, y, Screen.SIZE - 2 * x)

# -----------------------------------------------------------------------------

class ConfirmView extends AlertView

  constructor: (gurk, icon, title, text, @yesResult, @noResult, altIcon = null) ->
    super(gurk, icon, title, text, noResult, altIcon)
    @clearButton(5)
    @setButton(1, "YES")
    @setButton(3, "NO")

  command: (text) =>
    switch text
      when "YES" then @gurk.popView(@yesResult)
      when "NO" then @gurk.popView(@noResult)

# -----------------------------------------------------------------------------

class TileView extends View

  width: 0
  height: 0

  posX: 0
  posY: 0
  
  offsetX : 0
  offsetY : 0

  map : null
  animation : null
  interval : null

  banner : null
  centerBanner : false

  topBanner : null
  topBannerLeft : false

  constructor : (gurk, @mapName) ->
    super(gurk.getScreen(), gurk)
    @setMap(@mapName, 0, 0)
    @enableMovement()
    @centerBanner = false

  setMap : (mapName, x, y) =>
    @mapName = mapName
    @map = Data.maps[@mapName]
    @height = @map.height
    @width = @map.width
    @posX = x
    @posY = y

  drawTile : (icon, x, y) =>
    @screen.drawIcon(icon, x * Screen.UNIT + @offsetX, y * Screen.UNIT + @offsetY)

  drawCustom : (image, x, y) =>
    @screen.drawImage(image, x * Screen.UNIT + @offsetX - 2, y * Screen.UNIT + @offsetY - 2)

  getTerrain : (x, y) =>
    index = y * @map.width + x
    c = @map.map.charAt(index)
    Data.tiles[c]

  getTerrainIcon : (x, y) =>
    @getTerrain(x, y).icon

  animateBlock : (anim, x, y, radius, rate, callback) =>
    step = 0
    fn = () => @animateBlockFrame(anim, x, y, radius, rate, step++, callback)
    fn();
    @interval = setInterval(fn, rate)

  animateBlockFrame : (anim, x, y, radius, rate, frame, callback) =>
    frames = Icons[anim].frames
    if (!frames)
      frames = 1
    @draw()
    if (frame == frames)
      clearInterval(@interval)
      callback()
    else
      for yy in [y - radius .. y + radius]
        if (yy >= 0 and yy < @height)
          for xx in [x - radius .. x + radius]
            if (xx >= 0 and xx < @width)
              @screen.drawAnim(anim, xx * Screen.UNIT + @offsetX, yy * Screen.UNIT + @offsetY, frame)

  animate : (anim, x, y, rate, callback) =>
    step = 0
    fn = () => @animateFrame(anim, x * Screen.UNIT + @offsetX, y * Screen.UNIT + @offsetY, rate, step++, callback)
    fn();
    @interval = setInterval(fn, rate)

  animateFrame : (anim, x, y, rate, frame, callback) =>
    frames = Icons[anim].frames
    if (!frames)
      frames = 1
    @draw()
    if (frame == frames)
      clearInterval(@interval)
      callback()
    else
      @screen.drawAnim(anim, x, y, frame)

  fly : (anim, x1, x2, y1, y2, rate, callback, custom = null) =>
    n = Math.floor(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) * rate / 50) + 1
    step = 0
    fn = () => @flyFrame(anim, x1 * Screen.UNIT + @offsetX, x2 * Screen.UNIT + @offsetX, y1 * Screen.UNIT + @offsetY, y2 * Screen.UNIT + @offsetY, rate, step++, n, callback, custom)
    fn();
    @interval = setInterval(fn, rate)

  flyFrame : (anim, x1, x2, y1, y2, rate, step, n, callback, custom) =>
    x = Math.floor(x1 + (x2 - x1) * step / n)
    y = Math.floor(y1 + (y2 - y1) * step / n)
    frames = Icons[anim].frames
    if (!frames)
      frames = 1
    frame = step % frames
    @draw()
    if (custom)
      @screen.drawCustomAnim(custom, x, y)
    else
      @screen.drawAnim(anim, x, y, frame)
    if (step > n)
      clearInterval(@interval)
      @draw()
      callback()

  setBanner : (text) =>
    @banner = text
    @draw()

  clearBanner : =>
    @banner = null
    @draw()

  drawBanner : =>
    if (@banner)
      x = -Screen.HALF_UNIT
      y = 7 * Screen.UNIT
      @screen.drawIcon(Data.icons.bannerLeft, x, y)
      for i in [0...7]
        x += Screen.UNIT
        @screen.drawIcon(Data.icons.banner, x, y)
      x += Screen.UNIT
      @screen.drawIcon(Data.icons.bannerRight, x, y)
      if (@centerBanner)
        @screen.drawTextCentered(@banner, "#FFF", 0, y + 5, 128, 8)
      else
        @screen.drawText(@banner, "#FFF", 4, y + 5)

  setTopBanner : (numMoves, numAttacks, half = false) =>
    @topBanner = {"numMoves" : numMoves, "numAttacks" : numAttacks, "half" : half}

  clearTopBanner : =>
    @topBanner = null

  drawTopBanner : =>
    if (@topBanner)
      if (@topBannerLeft)
        leftX = -Screen.HALF_UNIT
      else
        leftX = 5 * Screen.UNIT - Screen.HALF_UNIT
      y = 0
      x = leftX
      @screen.drawIcon(Data.icons.bannerLeft, x, y)
      for i in [0...2]
        x += Screen.UNIT
        @screen.drawIcon(Data.icons.banner, x, y)
      x += Screen.UNIT
      @screen.drawIcon(Data.icons.bannerRight, x, y)
      x = leftX + Screen.HALF_UNIT + 5
      y = 5
      @screen.drawText("~", "#A0A0A0", x, y)
      x += 10
      @screen.drawText(":", "#A0A0A0", x, y)
      x += 3
      @screen.drawText("#{@topBanner.numMoves}", "#FFF", x, y)
      x = leftX + Screen.HALF_UNIT + 25
      @screen.drawText("`", "#A0A0A0", x, y)
      x += 6
      @screen.drawText(":", "#A0A0A0", x, y)
      x += 3
      if (@topBanner.half)
        attacks = "#{@topBanner.numAttacks-1}|"
      else
        attacks = "#{@topBanner.numAttacks}"
      @screen.drawText("#{attacks}", "#FFF", x, y)

# -----------------------------------------------------------------------------

class ImageProcessor

  @UP : 0
  @RIGHT : 90
  @DOWN : 180
  @LEFT : 270

  constructor : (@canvas, @ctx, @icons) ->
    # No-op

  drawIcon : (icon) =>
    x = 2;
    y = 2;
    coords = Icons[icon];
    k = Screen.UNIT * Screen.SCALE
    @ctx.drawImage(@icons[coords.block], k * coords.x, k * coords.y, k, k, x * Screen.SCALE, y * Screen.SCALE, k, k)

  drawRotated : (icon, degrees) =>
    @ctx.save();
    t = (Screen.HALF_UNIT + 2) * Screen.SCALE
    @ctx.translate(t, t)
    @ctx.rotate(degrees * Math.PI / 180)
    @ctx.translate(-t, -t)
    @drawIcon(icon)
    @ctx.restore();

  clear : =>
    @ctx.clearRect(0, 0, (Screen.UNIT + 4) * Screen.SCALE, (Screen.UNIT + 4) * Screen.SCALE)

  paint : (colors) =>
    arcs = ImageProcessor.computeArcs(colors, 12)
    size = (Screen.UNIT + 4) * Screen.SCALE
    img = @ctx.getImageData(0, 0, size, size).data
    for y in [0 ... Screen.UNIT]
      yy = (y + 2) * Screen.SCALE
      for x in [0 ... Screen.UNIT]
        xx = (x + 2) * Screen.SCALE
        i = (yy * size + xx) * 4
        r = img[i]
        g = img[i + 1]
        b = img[i + 2]
        a = img[i + 3]
        if (a > 0 and (r > 0 or g > 0 or b > 0))
          c = ImageProcessor.blend(colors, arcs, Screen.HALF_UNIT - y, Screen.HALF_UNIT - x)
          if (c.red > 0)
            r = Math.min(255, r + c.red)
          else
            r = Math.max(0, r + c.red)
          if (c.green > 0)
            g = Math.min(255, g + c.green)
          else
            g = Math.max(0, g + c.green)
          if (c.blue > 0)
            b = Math.min(255, b + c.blue)
          else
            b = Math.max(0, b + c.blue)
          @ctx.fillStyle = "rgba(#{r},#{g},#{b},#{a})"
          @ctx.fillRect(xx, yy, Screen.SCALE, Screen.SCALE)
    src = @canvas.toDataURL()
    result = new Image()
    result.src = src
    result

  @blend : (colors, arcs, x, y) ->
    if (colors.length == 1)
      return colors[0]
    max = -2 * Math.PI
    min = 2 * Math.PI
    for yy in [y, y + 1]
      for xx in [x, x + 1]
        angle = Math.atan2(yy, xx)
        if (angle > max)
          max = angle
        if (angle < min)
          min = angle
    if (min < 0)
      min += 2 * Math.PI
    if (max < 0)
      max += 2 * Math.PI
    a1 = Math.floor(min * arcs / Math.PI / 2)
    a2 = Math.floor(max * arcs / Math.PI / 2)
    if (a1 == a2)
      return colors[a1 % colors.length]
    else
      p1 = a2 - min * arcs / Math.PI / 2
      p2 = max * arcs / Math.PI / 2 - a2
      return Util.blendColors(colors[a1 % colors.length], colors[a2 % colors.length], p1 / (p1 + p2), p2 / (p1 + p2))

  @computeArcs : (colors, target) ->
    n = colors.length
    if (n == 1)
      return 1
    else
      k = Math.round(target / n)
      return k * n

  glow : (colors, intensity) =>
    arcs = ImageProcessor.computeArcs(colors, 30)
    length = Screen.UNIT + 4
    cells = Util.create2DArray(length, length)
    size = length * Screen.SCALE
    img = @ctx.getImageData(0, 0, size, size).data
    for y in [0 ... length - 2]
      yy = y * Screen.SCALE
      for x in [0 ... length]
        xx = x * Screen.SCALE
        i = (yy * size + xx) * 4
        a = img[i + 3]
        if (a > 0)
          cells[y][x] = 3
        else
          cells[y][x] = 0
    for y in [0 ... length - 3]
      for x in [0 ... length]
        if (cells[y][x] == 0)
          if (x > 0)
            if (cells[y][x-1] == 3)
              cells[y][x] = 2
          if (x + 1 < length)
            if (cells[y][x+1] == 3)
              cells[y][x] = 2
          if (y > 0)
            if (cells[y-1][x] == 3)
              cells[y][x] = 2
          if (y + 1 < length)
            if (cells[y+1][x] == 3)
              cells[y][x] = 2
    for y in [0 ... length - 2]
      for x in [0 ... length]
        if (cells[y][x] == 0)
          if (x > 0)
            if (cells[y][x-1] == 2)
              cells[y][x] = 1
          if (x + 1 < length)
            if (cells[y][x+1] == 2)
              cells[y][x] = 1
          if (y > 0)
            if (cells[y-1][x] == 2)
              cells[y][x] = 1
          if (y + 1 < length)
            if (cells[y+1][x] == 2)
              cells[y][x] = 1
    for y in [0 ... length - 2]
      yy = y * Screen.SCALE
      for x in [0 ... length]
        if (cells[y][x] > 0 and cells[y][x] < 3)
          xx = x * Screen.SCALE
          i = (yy * size + xx) * 4
          if (cells[y][x] == 1)
            @ctx.globalAlpha = intensity / 100 / 3
          else
            @ctx.globalAlpha = intensity / 100
          c = ImageProcessor.blend(colors, arcs, length / 2 - y, length / 2 - x)
          @ctx.fillStyle = "rgba(#{c.red},#{c.green},#{c.blue},255)"
          @ctx.fillRect(xx, yy, Screen.SCALE, Screen.SCALE)
    @ctx.globalAlpha = 1
    src = @canvas.toDataURL()
    result = new Image()
    result.src = src
    result

  shade : (icon, colors) =>
    @clear()
    @drawIcon(icon)
    @paint(colors)

  halo : (icon, colors, intensity) =>
    @clear()
    @drawIcon(icon)
    @glow(colors, intensity)

  process : (icon, shadeColors, haloColors) =>
    @clear()
    @drawIcon(icon)
    result = null
    if (shadeColors and shadeColors.length > 0)
      result = @paint(shadeColors)
    if (haloColors and haloColors.length > 0)
      result = @glow(haloColors, 80)
    result

  rotate : (icon, direction) =>
    @clear()
    @drawRotated(icon, direction)
    src = @canvas.toDataURL()
    result = new Image()
    result.src = src
    result


