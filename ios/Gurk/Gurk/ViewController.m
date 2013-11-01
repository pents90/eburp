//
//  ViewController.m
//  Gurk
//
//  Created by John Watkinson on 9/22/12.
//  Copyright (c) 2012 John Watkinson. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController
@synthesize viewWeb;
@synthesize player;
@synthesize sounds;
@synthesize lastSong;

- (void)viewDidLoad
{
    [super viewDidLoad];
	NSBundle *thisBundle = [NSBundle mainBundle];
	NSString *path = [thisBundle pathForResource:@"index" ofType:@"html"];
    NSURL *url = [NSURL URLWithString:path];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    lastSong = nil;
    viewWeb.delegate = self;
    viewWeb.scrollView.scrollEnabled = NO;
    viewWeb.scrollView.bounces = NO;
    [viewWeb loadRequest:requestObj];
    
    // Music Test
    player = nil;
    /*
    NSString *soundFilePath = [thisBundle pathForResource:@"gurkTune1" ofType:@"m4a"];
    NSURL *soundFileURL = [NSURL URLWithString:soundFilePath];
    player = [[AVAudioPlayer alloc] initWithContentsOfURL:soundFileURL error:nil];
    player.numberOfLoops = -1; //Infinite
    [player play];
     */
    // End Music Test

    // Sounds
    sounds = [NSMutableDictionary new];
    
    /*
    NSURL *url = [NSURL URLWithString:@"http://google.com"];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [viewWeb loadRequest:requestObj];
    */
    
    /*
    NSString *urlAddress = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
                            
    NSURL *url = [NSURL fileURLWithPath:urlAddress];
    
    NSString *path = [[NSBundle mainBundle] bundlePath];
    NSURL *baseURL = [NSURL fileURLWithPath:path];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [viewWeb loadRequest:requestObj];
    */
}

- (BOOL)webView:(UIWebView *)webView2 shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
    
    NSString *requestString = [[[request URL] absoluteString] stringByReplacingPercentEscapesUsingEncoding: NSUTF8StringEncoding];
    //NSLog(requestString);
    
    if ([requestString hasPrefix:@"ios-log:"]) {
        NSString* logString = [[requestString componentsSeparatedByString:@":#iOS#"] objectAtIndex:1];
        NSLog(@"UIWebView console: %@", logString);
        return NO;
    } else if ([requestString hasPrefix:@"sound:"]) {
        NSString* soundName = [[requestString componentsSeparatedByString:@"sound:"] objectAtIndex:1];
        NSLog(@"Play sound: '%@'", soundName);
        AVAudioPlayer *sound = [sounds objectForKey:soundName];
        if (sound == nil) {
            NSLog(@"Loading sound: '%@'", soundName);
            NSBundle *thisBundle = [NSBundle mainBundle];
            NSString *soundFilePath = [thisBundle pathForResource:soundName ofType:@"wav"];
            NSLog(@"Path: '%@'", soundFilePath);
            NSURL *soundFileURL = [NSURL URLWithString:soundFilePath];
            sound = [[AVAudioPlayer alloc] initWithContentsOfURL:soundFileURL error:nil];
            [sound setVolume:0.4];
            [sounds setObject:sound forKey:soundName];
        }
        [sound play];
        sound.currentTime = 0;
        return NO;
    } else if ([requestString hasPrefix:@"song:"]) {
        NSString* soundName = [[requestString componentsSeparatedByString:@"song:"] objectAtIndex:1];
        if ([soundName isEqualToString:lastSong]) {
            return YES;
        }
        NSLog(@"Play music: '%@'", soundName);
        if (player != nil) {
            [player stop];
        }
        NSBundle *thisBundle = [NSBundle mainBundle];
        NSString *soundFilePath = [thisBundle pathForResource:soundName ofType:@"m4a"];
        NSLog(@"Path: '%@'", soundFilePath);
        NSURL *soundFileURL = [NSURL URLWithString:soundFilePath];
        player = [[AVAudioPlayer alloc] initWithContentsOfURL:soundFileURL error:nil];
        [player setVolume:0.9];
        player.numberOfLoops = -1; //Infinite
        [player play];
        lastSong = soundName;
    } else if ([requestString hasPrefix:@"stopmusic:"]) {
        if (player != nil) {
            [player stop];
        }
    }
    
    return YES;
}

- (void)viewDidUnload
{
    [self setViewWeb:nil];
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
