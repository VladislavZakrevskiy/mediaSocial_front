type relationships =
'Не выбрано' | 'Не женат' | 'Встречаюсь' |
'Помолвлен' | 'Женат' | 'В гражданском браке' |
'Влюблен' | 'Все сложно' | 'В активном поиске' | null | undefined

export const relationship = <const> ['Не выбрано', 'Не женат' , 'Встречаюсь' ,
'Помолвлен' , 'Женат' , 'В гражданском браке' ,
'Влюблен' , 'Все сложно' , 'В активном поиске']

export interface IDesc {
    // user_id: string
    desc: string
    relationships?: typeof relationship[number] | null | undefined
    date_birth?: string | number | string[] | undefined
}

export interface IContacts {
    // user_id: string
    city?: string | number |  string[] | undefined
    house?: string | number |  string[] | undefined
    phone: string | number |  string[] | undefined
    another_phone?: string | number |  string[] | undefined
    skype?: string | number |  string[] | undefined
    site?: string | number |  string[] | undefined
}

export interface IIntereses {
    // user_id: string
    activity?: string | number |  string[] | undefined
    intereses?: string | number |  string[] | undefined
    f_music?: string | number |  string[] | undefined
    f_films?: string | number |  string[] | undefined
    f_show?: string | number |  string[] | undefined
    f_books?: string | number |  string[] | undefined
    f_games?: string | number |  string[] | undefined
    f_quote?: string | number |  string[] | undefined
    about_user?: string | number |  string[] | undefined
}

export type polit =
'Не выбраны' | 'Индиффернтные' | 'Коммунистические' |
'Социалистические' | 'Умеренные' | 'Либеральные' |
'Консервативные' | 'Монархические'

export type rel = 
'Не указано' | 'Резко негативное' | 'Негативное' |
'Компромисное' | 'Нейтральное' | 'Положительное' 

export type view = 'Не указано' |
'Православие' | 'Иудаизм' | 'Католицизм' |
'Протестантизм' | 'Ислам' | 'Буддизм' |
'Конфуцианство' | 'Светский гуманизм' | 'Пастафариантсво'

export type people = 'Не указано' |
'Семья и дети' | 'Карьера и деньги' | 'Развлечение и отдых' |
'Наука и исследование' | 'Совершенствование мира' | 'Саморазвитие' |
'Красота и искусство' | 'Слава и влияние'

export const politic = <const>['Не выбраны' , 'Индиффернтные' , 'Коммунистические' ,
'Социалистические' , 'Умеренные' , 'Либеральные' ,
'Консервативные' , 'Монархические']

export const relat = <const>['Не указано', 'Резко негативное' , 'Негативное' ,
'Компромисное' , 'Нейтральное' , 'Положительное' ]

export const worldview = <const>['Не указано','Православие' , 'Иудаизм' ,'Католицизм' , 'Протестантизм' , 'Ислам' , 'Буддизм' ,
'Конфуцианство' , 'Светский гуманизм' , 'Пастафариантсво']

export const main_people = <const>['Не указано','Семья и дети' , 'Карьера и деньги' , 'Развлечение и отдых' ,'Наука и исследование' , 'Совершенствование мира' , 'Саморазвитие' , 'Красота и искусство' , 'Слава и влияние']

export interface ILife {
    // user_id: string
    polit?: typeof politic[number] | null | undefined
    worldview?: typeof worldview[number] | null | undefined
    main_people?: typeof main_people[number] | null | undefined
    rel_smoke?: typeof relat[number] | null | undefined
    rel_alc?: typeof relat[number] | null | undefined
}

export interface IName {
    first_name: string
    last_name: string
    username: string
    user_id: string 
}