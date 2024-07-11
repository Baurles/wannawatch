import requests
from bs4 import BeautifulSoup
import json
from types import SimpleNamespace
import psycopg2

cookies = {
    'yashr': '7253066451718457509',
    'yandex_login': '',
    'yandexuid': '7790079571718223759',
    '_ym_uid': '1718457514861264492',
    'yuidss': '7790079571718223759',
    'location': '1',
    'spravka': 'dD0xNzE4NDU3NTI4O2k9MTg4LjI0Mi44OC44NjtEPUNFQkJERkVCRkZFRkY4QjlDOTc5MEJBN0YzMURGODQ5RDMxQTM5REVFM0RBMUZGNURFNEM3MjJGMzFFNkZCMjVFMEQxMjZBNDhCNjFFMEI4NDUyNzAxQzFBOEQ2MTRBNzcyMENENjQ1QkVBNzkxMzRGNDIyM0NGMzFCNEJCNjQ3MTFBQkMwQjkxMkUzNjlEREIxQjc2QUM5NjM7dT0xNzE4NDU3NTI4MjIyODM5Mjc2O2g9N2ViOTczZjk3M2ZmYjgzMTlmZDAzNTY5NmEyYmFmMmE=',
    'coockoos': '4',
    'my_perpages': '%5B%5D',
    'mda_exp_enabled': '1',
    'i': 'iVvCgIVRSD09t7MIzjybh44zNmnce4j2JHq488nXz5DcmStZ0dCNko3Ez7AMQv8GuEa00441780kcpu4Ymh423ez1oI=',
    'crookie': '8l4K0vuL9dEmqU1SHJ02h+bd7PrAc3pwAxl6ENY/87THPQWfj7lRIBKbVv5bgLsWU8PzlAUO22rG0+HXD9D8vWDxqmg=',
    'cmtchd': 'MTcyMDExMjY2NjIyNA==',
    '_csrf': 'Jv44hFrM7T1iMQaYxeSl-s-W',
    'ya_sess_id': 'noauth:1720337962',
    'sessar': '1.1191.CiCSlHjHfi0rB_xCDHj7tHGC4n1VfXGzASOikN4UGnLKGQ.wYZmUSmNSJEk9ySHDOrtbVHfSYNU9M56adjhHuY2Ijg',
    'ys': 'c_chck.1207010118',
    'mda2_beacon': '1720337962605',
    'sso_status': 'sso.passport.yandex.ru:synchronized',
    'initialUtm': '{%22utm_referrer%22:%22www.kinopoisk.ru%22}',
    'finalUtm': '{%22utm_referrer%22:%22www.kinopoisk.ru%22}',
    'no-re-reg-required': '1',
    'desktop_session_key': 'b4fab244b3765a665d1c858ba313733f8535b60cb38983d3634f2645ca586a005f3b939429d3e4b44c397456cc44c0af82015800decacfb2d938f202c23bcfae496e1291d36eb0a5e5f833dd16cb30149350f1a521e00b66a712948baac6570a',
    'desktop_session_key.sig': 'vutgPbmFi0kDlxNO044tUqZB4Qk',
    'gdpr': '0',
    'PHPSESSID': '44b1bb93c57eaa89edbaf804a65693e2',
    'user_country': 'ru',
    'yandex_gid': '21623',
    'tc': '6101',
    'yp': '1720424366.yu.7790079571718223759',
    'ymex': '1722929966.oyu.7790079571718223759',
    'kdetect': '1',
    '_ym_isad': '1',
    '_yasc': 'Xn4b7v2JhqACvSfG2MRL0GnncAuiT+nT3ke8tyF/oi11n2dybgGpD6q61eItj4abmhDdOd4SuA==',
    '_ym_d': '1720343714',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    # 'cookie': 'yashr=7253066451718457509; yandex_login=; yandexuid=7790079571718223759; _ym_uid=1718457514861264492; yuidss=7790079571718223759; location=1; spravka=dD0xNzE4NDU3NTI4O2k9MTg4LjI0Mi44OC44NjtEPUNFQkJERkVCRkZFRkY4QjlDOTc5MEJBN0YzMURGODQ5RDMxQTM5REVFM0RBMUZGNURFNEM3MjJGMzFFNkZCMjVFMEQxMjZBNDhCNjFFMEI4NDUyNzAxQzFBOEQ2MTRBNzcyMENENjQ1QkVBNzkxMzRGNDIyM0NGMzFCNEJCNjQ3MTFBQkMwQjkxMkUzNjlEREIxQjc2QUM5NjM7dT0xNzE4NDU3NTI4MjIyODM5Mjc2O2g9N2ViOTczZjk3M2ZmYjgzMTlmZDAzNTY5NmEyYmFmMmE=; coockoos=4; my_perpages=%5B%5D; mda_exp_enabled=1; i=iVvCgIVRSD09t7MIzjybh44zNmnce4j2JHq488nXz5DcmStZ0dCNko3Ez7AMQv8GuEa00441780kcpu4Ymh423ez1oI=; crookie=8l4K0vuL9dEmqU1SHJ02h+bd7PrAc3pwAxl6ENY/87THPQWfj7lRIBKbVv5bgLsWU8PzlAUO22rG0+HXD9D8vWDxqmg=; cmtchd=MTcyMDExMjY2NjIyNA==; _csrf=Jv44hFrM7T1iMQaYxeSl-s-W; ya_sess_id=noauth:1720337962; sessar=1.1191.CiCSlHjHfi0rB_xCDHj7tHGC4n1VfXGzASOikN4UGnLKGQ.wYZmUSmNSJEk9ySHDOrtbVHfSYNU9M56adjhHuY2Ijg; ys=c_chck.1207010118; mda2_beacon=1720337962605; sso_status=sso.passport.yandex.ru:synchronized; initialUtm={%22utm_referrer%22:%22www.kinopoisk.ru%22}; finalUtm={%22utm_referrer%22:%22www.kinopoisk.ru%22}; no-re-reg-required=1; desktop_session_key=b4fab244b3765a665d1c858ba313733f8535b60cb38983d3634f2645ca586a005f3b939429d3e4b44c397456cc44c0af82015800decacfb2d938f202c23bcfae496e1291d36eb0a5e5f833dd16cb30149350f1a521e00b66a712948baac6570a; desktop_session_key.sig=vutgPbmFi0kDlxNO044tUqZB4Qk; gdpr=0; PHPSESSID=44b1bb93c57eaa89edbaf804a65693e2; user_country=ru; yandex_gid=21623; tc=6101; yp=1720424366.yu.7790079571718223759; ymex=1722929966.oyu.7790079571718223759; kdetect=1; _ym_isad=1; _yasc=Xn4b7v2JhqACvSfG2MRL0GnncAuiT+nT3ke8tyF/oi11n2dybgGpD6q61eItj4abmhDdOd4SuA==; _ym_d=1720343714',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
}

params = {
    'utm_referrer': 'www.kinopoisk.ru',
}

def dbConnection():
    try:
        conn = psycopg2.connect('postgres://admin:root@127.0.0.1:5433/postgres?sslmode=disable')
        cursor=conn.cursor()
        print('DB is connected')
        id = 397667
        data=sendRequest(id)
        toSend = (data.name,data.description,data.image,data.aggregateRating.ratingValue,data.countryOfOrigin[0],data.datePublished)
        cursor.execute("INSERT INTO films (name,description,imgurl,rate,country,year) VALUES (%s,%s,%s,%s,%s,%s)",toSend)
        conn.commit()
        print('Data is added!') 
        cursor.close()
        conn.close() 
        print('Connection closed!')
    except:
        print('Can`t establish connection to database')
    

def sendRequest(id):
    response = requests.get(f'https://www.kinopoisk.ru/film/{id}', params=params, cookies=cookies, headers=headers)
    parsed_html=BeautifulSoup(response.text,features='lxml')
    resoult = json.loads(parsed_html.body.find(attrs={'type':'application/ld+json'}).text,object_hook=lambda d: SimpleNamespace(**d))
    print(f'{id}' + ' Фильм '+ resoult.name +' обработан!')
    return resoult

dbConnection()

    
