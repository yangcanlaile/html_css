import sys
import pygame
from setting import Setting


def run_game():
    pygame.init()
    ai_setting = Setting()
    screen = pygame.display.set_mode(
        (ai_setting.screen_width, ai_setting.screen_height))
    pygame.display.set_caption("Alien Invasion")

    # 设置背景色
    bg_color = ai_setting.bg_color
    # 开始游戏的主循环
    while True:
        screen.fill(bg_color)
        pygame.display.flip()

run_game()
