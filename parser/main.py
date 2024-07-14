import requests
from bs4 import BeautifulSoup
import json
from types import SimpleNamespace
import psycopg2
import time

cookies = {
    'yashr': '7253066451718457509',
    'yandex_login': '',
    'yandexuid': '7790079571718223759',
    '_ym_uid': '1718457514861264492',
    'yuidss': '7790079571718223759',
    'location': '1',
    'coockoos': '4',
    'my_perpages': '%5B%5D',
    'mda_exp_enabled': '1',
    'crookie': '2sXE/UKxeVkFcKRMjIklyXSwl0NLj/Uwsn5luo+fo4kr/Vkz1WVZO2d2KGVNbxQ99W8RzSVuP7XtsAP2/0TJL1JbaDE=',
    'cmtchd': 'MTcyMDcxODcxODkxOA==',
    '_csrf': 'RjfOG-XqueapvwWOt3JeVMDO',
    'disable_server_sso_redirect': '1',
    'ya_sess_id': 'noauth:1720942115',
    'sessar': '1.1191.CiD6JVPiJZkN77fd6smKqBlcrwmnB1rLDFAN3nSeFlk7-g.Evt7Z-QACMgu6-RKphwBv965OFk1HoAyPU35sTUuvoc',
    'ys': 'c_chck.2247145586',
    'i': '23Z7vkzCIipED9NV0rRFDx2CWOhFWLdpQWU6tnZPdFFauaFPxy6IW1otBWgqRVS7CBPBFS6AEUSlTlXJgzu2pwu2m6g=',
    'mda2_beacon': '1720942115638',
    'sso_status': 'sso.passport.yandex.ru:synchronized',
    'initialUtm': '{%22utm_referrer%22:%22www.kinopoisk.ru%22}',
    'finalUtm': '{%22utm_referrer%22:%22www.kinopoisk.ru%22}',
    'no-re-reg-required': '1',
    'gdpr': '0',
    '_ym_isad': '1',
    'desktop_session_key': '6f6f0efa7ae4c725442e60670ce3ca6218fdf366a4a8dfd0e9477efa69cef9131f4bdf7cbd14520c17b7c24fb4bce29d646b200609d8dfee9370398d826accd497a2b1e27e28ecec9a5ae43646a143ff05567a30329d5875899e4fc80eb689d2',
    'desktop_session_key.sig': '8-ejvhbGyLiLKGtCuM2hU0DSg58',
    'PHPSESSID': 'd6910ce668332c90387cff5889e03ca9',
    'user_country': 'ru',
    'yandex_gid': '192',
    'tc': '450',
    'yp': '1721029808.yu.7790079571718223759',
    'ymex': '1723535408.oyu.7790079571718223759',
    '_ym_visorc': 'b',
    'spravka': 'dD0xNzIwOTQ0NDAwO2k9MTg4LjI0Mi44OC44NjtEPTkzOEI3M0U1RTU2OEQ0QUNFNjhGRjIwMDFDNDNCODA0RjZDRkM2RTVEQTUyMTE1OTQ5Njg2ODU0RkVDOTc3QTUzRkYwMjk2RDdGNUU2MDYyMDYwQzIyREEyNTMyQjYzN0EwNDVCRTQxNjJFRThFRTM2NzZBN0U2OTQ3MTZBQ0MxMDlERTNCNkQ3N0IxOUFGQ0ZDRkJCMDYwMTVGRDRDMkYyMzhCRjZDMjt1PTE3MjA5NDQ0MDAzMTYwMDgzNzE7aD0wYjhjODBkZjVmNzk3OTNmNjhlYjJlNTk1NWZhOTUwNQ==',
    '_yasc': 'Z9jHNi2KtNdYLYWa2CtDiNLVJ07R+/1XGSlyBHBkMNHJvkQCRpH6jrksBBZxeZ+w89kdk0X15g==',
    '_ym_d': '1720944825',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    # 'cookie': 'yashr=7253066451718457509; yandex_login=; yandexuid=7790079571718223759; _ym_uid=1718457514861264492; yuidss=7790079571718223759; location=1; coockoos=4; my_perpages=%5B%5D; mda_exp_enabled=1; crookie=2sXE/UKxeVkFcKRMjIklyXSwl0NLj/Uwsn5luo+fo4kr/Vkz1WVZO2d2KGVNbxQ99W8RzSVuP7XtsAP2/0TJL1JbaDE=; cmtchd=MTcyMDcxODcxODkxOA==; _csrf=RjfOG-XqueapvwWOt3JeVMDO; disable_server_sso_redirect=1; ya_sess_id=noauth:1720942115; sessar=1.1191.CiD6JVPiJZkN77fd6smKqBlcrwmnB1rLDFAN3nSeFlk7-g.Evt7Z-QACMgu6-RKphwBv965OFk1HoAyPU35sTUuvoc; ys=c_chck.2247145586; i=23Z7vkzCIipED9NV0rRFDx2CWOhFWLdpQWU6tnZPdFFauaFPxy6IW1otBWgqRVS7CBPBFS6AEUSlTlXJgzu2pwu2m6g=; mda2_beacon=1720942115638; sso_status=sso.passport.yandex.ru:synchronized; initialUtm={%22utm_referrer%22:%22www.kinopoisk.ru%22}; finalUtm={%22utm_referrer%22:%22www.kinopoisk.ru%22}; no-re-reg-required=1; gdpr=0; _ym_isad=1; desktop_session_key=6f6f0efa7ae4c725442e60670ce3ca6218fdf366a4a8dfd0e9477efa69cef9131f4bdf7cbd14520c17b7c24fb4bce29d646b200609d8dfee9370398d826accd497a2b1e27e28ecec9a5ae43646a143ff05567a30329d5875899e4fc80eb689d2; desktop_session_key.sig=8-ejvhbGyLiLKGtCuM2hU0DSg58; PHPSESSID=d6910ce668332c90387cff5889e03ca9; user_country=ru; yandex_gid=192; tc=450; yp=1721029808.yu.7790079571718223759; ymex=1723535408.oyu.7790079571718223759; _ym_visorc=b; spravka=dD0xNzIwOTQ0NDAwO2k9MTg4LjI0Mi44OC44NjtEPTkzOEI3M0U1RTU2OEQ0QUNFNjhGRjIwMDFDNDNCODA0RjZDRkM2RTVEQTUyMTE1OTQ5Njg2ODU0RkVDOTc3QTUzRkYwMjk2RDdGNUU2MDYyMDYwQzIyREEyNTMyQjYzN0EwNDVCRTQxNjJFRThFRTM2NzZBN0U2OTQ3MTZBQ0MxMDlERTNCNkQ3N0IxOUFGQ0ZDRkJCMDYwMTVGRDRDMkYyMzhCRjZDMjt1PTE3MjA5NDQ0MDAzMTYwMDgzNzE7aD0wYjhjODBkZjVmNzk3OTNmNjhlYjJlNTk1NWZhOTUwNQ==; _yasc=Z9jHNi2KtNdYLYWa2CtDiNLVJ07R+/1XGSlyBHBkMNHJvkQCRpH6jrksBBZxeZ+w89kdk0X15g==; _ym_d=1720944825',
    'priority': 'u=0, i',
    'referer': 'https://www.kinopoisk.ru/showcaptcha?mt=6146670C1B1E49EE488C6AAE576642C9E2642DB467FB3AE85E45D6A4A11C1F0F576B62AE4D444365881135625C1D0DD2B7301FF99902848E71E490BE2C559261E2ABD77A374A1AB36C387DC59446408FDCE786F163CCCC405A8DF95A035D52A4DC4A1FCBBC206EF5FC11CA61092C782EA2DEBBB7A6B955FCB73E9CDAFDD9AC51EB3429EF870F39E58AE3DDFE7347FB00091789922D6DB8013C6B0A6183E76DAA3319C9887981545D5E66DBE2D9148ECE0EA4939A2A26FD83EB06054DA7024D3AB8903CA7CD6E3F4D73B779AD9372223D75A5DE4200670D09C6103C0A8F&retpath=aHR0cHM6Ly93d3cua2lub3BvaXNrLnJ1L2ZpbG0vMzYxPw%2C%2C_fe87bf6f92c640f13c3ae8a9e9d773c8&t=2/1720944395/828553389ac23c5b7cb1ff4bf94ec42d&u=1cd84a1d-75e19b23-b512c51a-915b2297&s=8fbfe45cbda6191f613b9789d20eb552',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
}


def dbConnection():
    id = 300
    while id < 1000:
        try:
            conn = psycopg2.connect('postgres://admin:root@127.0.0.1:5433/postgres?sslmode=disable')
            cursor=conn.cursor()
            print('DB is connected')
            data=sendRequest(id)
            toSend = (data.name,data.description,data.image,data.aggregateRating.ratingValue,data.countryOfOrigin,data.datePublished,data.genre)
            cursor.execute("INSERT INTO films (name,description,imgurl,rate,country,year,genre) VALUES (%s,%s,%s,%s,%s,%s,%s)",toSend)
            conn.commit()
            print('Data is added!') 
            cursor.close()
            conn.close() 
            print('Connection closed!')
            id+=1
            time.sleep(5)
        except:
            print('Can`t establish connection to database')
            id+=1
            time.sleep(5)
    

def sendRequest(id):
    response = requests.get(f'https://www.kinopoisk.ru/film/{id}',  cookies=cookies, headers=headers)
    parsed_html=BeautifulSoup(response.text,features='lxml')
    resoult = json.loads(parsed_html.body.find(attrs={'type':'application/ld+json'}).text,object_hook=lambda d: SimpleNamespace(**d))
    print(f'{id}' + ' Фильм '+ resoult.name +' обработан!')
    return resoult

dbConnection()

    
