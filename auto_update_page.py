#!/usr/bin/python
# -*- coding: utf-8 -*-
import time
from selenium import webdriver
from selenium.webdriver.common.alert import Alert

# 无窗口模式选项
options = webdriver.ChromeOptions()
options.add_argument("headless")

# 模拟浏览器打开到gitee登录界面
driver = webdriver.Chrome(options=options)
driver.get('https://gitee.com/login')
# 将窗口最大化
driver.maximize_window()
time.sleep(2)

# 输入账号--通过html的id属性定位输入位置--改为你的账号
user_login = driver.find_element_by_id('user_login')
user_login.send_keys("jokerisfun@126.com")
# 输入密码--通过html的id属性定位输入位置--改为你的密码
driver.find_element_by_id('user_password').send_keys("jokerisfun123")
# 点击登录按钮--通过xpath确定点击位置
driver.find_element_by_xpath(
    '/html/body/div[2]/div[2]/div[1]/div/div[2]/div/form[1]/div[2]/div/div/div[4]/input').click()

time.sleep(2)

# 切换到gitee pages界面--改为you_gitee_id
driver.get('https://gitee.com/tuta0030/tuta0030/pages')

# 关掉广告
driver.find_element_by_xpath('/html/body/div[6]/a/img[2]').click()

# 点击更新按钮--通过xpath确定点击位置
driver.find_element_by_xpath('/html/body/div[3]/div[2]/div/div[2]/div/form/div[7]').click()
# 确认更新提示框--这个函数的作用是确认提示框
Alert(driver).accept()

# 等待5秒更新
time.sleep(5)

# 这个print其实没事什么用,如果真的要测试脚本是否运行成功，可以用try来抛出异常
print("成功")

# 脚本运行成功,退出浏览器
driver.quit()

# 写上更新日志
# 我这里是写在D盘，可以改为自己喜欢的目录
fp = open("log.txt", "a+")
now_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
fp.write("auto update time:{0}\n".format(now_time))
fp.close()