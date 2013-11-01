# -----------------------------------------------------------------------------
#
# This was created to hold device-specific implementations of certain functions.
# The idea was to implement a different one of these for each platform (web, iOS,
# Android). But in the end, simple Javascript hacks were used instead.
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

class Device

  @SAVE_KEY : "_GurkSavedGame"
  @SETTINGS_KEY : "_GurkSetting_"

  @hasSavedGame : =>
    #!!localStorage[Device.SAVE_KEY]
    !!getData(Device.SAVE_KEY)

  @saveGame : (game) =>
    #localStorage[Device.SAVE_KEY] = game
    putData(Device.SAVE_KEY, game)

  @loadGame : =>
    #localStorage[Device.SAVE_KEY]
    getData(Device.SAVE_KEY)

  @clearGame : =>
    #localStorage[Device.SAVE_KEY] = null
    putData(Device.SAVE_KEY, null)

  @getSetting : (name, defaultValue) =>
    key = Device.SETTINGS_KEY + name
#    if (!!localStorage[key])
#      if (localStorage[key] == "false") then false else true
#    else
#      defaultValue
    if (!!getData(key))
      if (getData(key) == "false") then false else true
    else
      defaultValue

  @setSetting : (name, value) =>
    key = Device.SETTINGS_KEY + name
    #localStorage[key] = value
    putData(key, value)
