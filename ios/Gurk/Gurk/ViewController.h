//
//  ViewController.h
//  Gurk
//
//  Created by John Watkinson on 9/22/12.
//  Copyright (c) 2012 John Watkinson. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AudioToolbox/AudioToolbox.h>
#import <AVFoundation/AVFoundation.h>
#import "SoundEffect.h"

@interface ViewController : UIViewController<UIWebViewDelegate>

@property (strong, nonatomic) IBOutlet UIWebView *viewWeb;
@property (strong, nonatomic) AVAudioPlayer *player;
@property (strong, nonatomic) NSMutableDictionary *sounds;
@property (strong, nonatomic) NSString *lastSong;

@end
