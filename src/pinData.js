import SortData from './SortData'

const pinData = [
    {
        id:1,
        late:34.410675085764105,
        long:-119.85753197936104,
        party:"Summer Party",
        img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-party-video-ad-template-design-024d0ddcdf0746f9fa1e87773c385103_screen.jpg?ts=1567082239",
        rating:251,
        more:"With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM, With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM",
        user:"Gen(Admin)"
    },
    {
        id:2,
        late:34.41294367538547, 
        long:-119.8542252392064,
        party:"Friday Night",
        img:"https://graphicriver.img.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=eb45e3dc4e8cb79779e595e5a82137d6",
        rating:105,
        more:"Dec 30th; Free parking; $20 ticket; girls free entry at 8pm",
        user:"Amber Rose"
    },
    {
        id:3,
        late:34.4141210204997, 
        long:-119.86599027281127,
        party:"Disco Night Party",
        img:"https://png.pngtree.com/png-clipart/20201208/original/pngtree-purple-glitter-midnight-disco-party-poster-png-image_5501860.jpg",
        rating:135,
        more:"Every saturday night; 8pm to 0am; DJ John; Dancer Linda; Singer Anna",
        user:"Krish"
    },
    {
        id:4,
        late:34.41018690018842, 
        long:-119.8645631532996,
        party:"Summer Party",
        img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-party-video-ad-template-design-024d0ddcdf0746f9fa1e87773c385103_screen.jpg?ts=1567082239",
        rating:21,
        more:"With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM, With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM",
        user:"Gen(Admin)"
    },
    {
        id:5,
        late:34.415476660673846,
        long:-119.85394948177901,
        party:"Friday Night",
        img:"https://graphicriver.img.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=eb45e3dc4e8cb79779e595e5a82137d6",
        rating:65,
        more:"Dec 30th; Free parking; $20 ticket; girls free entry at 8pm",
        user:"Amber Rose"
    },
    {
        id:6,
        late:34.41539051543391, 
        long:-119.85485448434765,
        party:"Disco Night Party",
        img:"https://png.pngtree.com/png-clipart/20201208/original/pngtree-purple-glitter-midnight-disco-party-poster-png-image_5501860.jpg",
        rating:44,
        more:"Every saturday night; 8pm to 0am; DJ John; Dancer Linda; Singer Anna",
        user:"Krish"
    },
    {
        id:7,
        late:34.41649603932757, 
        long:-119.86228594783223,
        party:"Summer Party",
        img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-party-video-ad-template-design-024d0ddcdf0746f9fa1e87773c385103_screen.jpg?ts=1567082239",
        rating:99,
        more:"With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM, With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM",
        user:"Gen(Admin)"
    },
    {
        id:8,
        late:34.41305020244889, 
        long:-119.86437441534918,
        party:"Friday Night",
        img:"https://graphicriver.img.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=eb45e3dc4e8cb79779e595e5a82137d6",
        rating:78,
        more:"Dec 30th; Free parking; $20 ticket; girls free entry at 8pm",
        user:"Amber Rose"
    },
    {
        id:9,
        late:34.410681107286365, 
        long:-119.86609740100869,
        party:"Disco Night Party",
        img:"https://png.pngtree.com/png-clipart/20201208/original/pngtree-purple-glitter-midnight-disco-party-poster-png-image_5501860.jpg",
        rating:11,
        more:"Every saturday night; 8pm to 0am; DJ John; Dancer Linda; Singer Anna",
        user:"Krish"
    },
    {
        id:10,
        late:34.414801853902546, 
        long:-119.85946651680388,
        party:"Summer Party",
        img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-party-video-ad-template-design-024d0ddcdf0746f9fa1e87773c385103_screen.jpg?ts=1567082239",
        rating:5,
        more:"With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM, With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM",
        user:"Gen(Admin)"
    },
    {
        id:11,
        late:34.41707033158999, 
        long:-119.86118950246338,
        party:"Friday Night",
        img:"https://graphicriver.img.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=eb45e3dc4e8cb79779e595e5a82137d6",
        rating:30,
        more:"Dec 30th; Free parking; $20 ticket; girls free entry at 8pm",
        user:"Amber Rose"
    },
    {
        id:12,
        late:34.414241903740056, 
        long:-119.85626419996125,
        party:"Disco Night Party",
        img:"https://png.pngtree.com/png-clipart/20201208/original/pngtree-purple-glitter-midnight-disco-party-poster-png-image_5501860.jpg",
        rating:33,
        more:"Every saturday night; 8pm to 0am; DJ John; Dancer Linda; Singer Anna",
        user:"Krish"
    },
    {
        id:13,
        late:34.41368194982713, 
        long:-119.85527217791487,
        party:"Summer Party",
        img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-party-video-ad-template-design-024d0ddcdf0746f9fa1e87773c385103_screen.jpg?ts=1567082239",
        rating:66,
        more:"With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM, With Ken Adams; Food and Drinks; $10 per entry; July 31 9AM",
        user:"Gen(Admin)"
    },
    {
        id:14,
        late:34.41500286074059, 
        long:-119.85502852337717,
        party:"Friday Night",
        img:"https://graphicriver.img.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=eb45e3dc4e8cb79779e595e5a82137d6",
        rating:83,
        more:"Dec 30th; Free parking; $20 ticket; girls free entry at 8pm",
        user:"Amber Rose"
    },
    {
        id:15,
        late:34.41204513997063, 
        long:-119.85936209336927,
        party:"Disco Night Party",
        img:"https://png.pngtree.com/png-clipart/20201208/original/pngtree-purple-glitter-midnight-disco-party-poster-png-image_5501860.jpg",
        rating:1,
        more:"Every saturday night; 8pm to 0am; DJ John; Dancer Linda; Singer Anna",
        user:"Krish"
    },
]
export default SortData(pinData)