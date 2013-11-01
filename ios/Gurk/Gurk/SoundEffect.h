#import <AudioToolbox/AudioServices.h>

@interface SoundEffect : NSObject
{
    SystemSoundID soundID;
}

- (id)initWithSoundNamed:(NSString *)filename;
- (void)play;

@end