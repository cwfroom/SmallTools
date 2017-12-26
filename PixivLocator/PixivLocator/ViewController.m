//
//  ViewController.m
//  PixivLocator
//
//  Created by Loli on 12/25/17.
//  Copyright © 2017 Wenfei Cao. All rights reserved.
//

#import "ViewController.h"
#import "OpenInChromeController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UITextField *IDField;

@end

@implementation ViewController
NSString *const baseURL = @"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=";


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)openBrowser{
    NSLog(@"%@",self.IDField.text);
    NSString* fullURL = [baseURL stringByAppendingString:self.IDField.text];
    NSLog(fullURL);
    [[OpenInChromeController sharedInstance] openInChrome:[NSURL URLWithString:fullURL]];
    
}

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event {
    UITouch *touch = [[event allTouches] anyObject];
    if (![[touch view] isKindOfClass:[UITextField class]] && ![[touch view] isKindOfClass:[UITextView class]]) {
        [self.view endEditing:YES];
    }
    [super touchesBegan:touches withEvent:event];
}
- (IBAction)clearButtonTouch:(id)sender {
    [self.IDField setText:@""];
}

- (IBAction)okButtonTouch:(id)sender {
    if (![self.IDField.text  isEqual: @""]){
        [self openBrowser];
    }
    
}

@end
