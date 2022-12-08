var config = {
    style: 'mapbox://styles/agibso/cl9j3npl6000115t10is5nx1h',
    accessToken: 'pk.eyJ1IjoiYWdpYnNvIiwiYSI6ImNsOWhsc3c4YTBpZHQzdW13anFsbzViaGwifQ.q66_0ZvI_Z17k0etBXDcqQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: false,
    chapters: [
        {
            id: 'layer-name',
            alignment: 'right',
            // hidden: false,
            title: '',
            image: './images/SegregatedSeattle.png',
            link: '',
            description: '',
            location: {
                center: { lon: -122.30871, lat: 47.64022 },
                zoom: 10.50,
                pitch: 0.00,
                bearing: 0.00
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'ud',
                    opacity: 1,
                    // duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ud',
                    opacity: 1
                }
            ]
        },
        {
            id: 'blueridge-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/blueridge.png',
            link: 'https://depts.washington.edu/civilr/images/segregated/covenants/Blue%20Ridge%201940-1600.png',
            description: '',
            location: {
                center: { lon: -122.37582, lat: 47.70498 },
                zoom: 14.69,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                    layer: "ud",
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: "ud",
                    opacity: 0

                }
            ]
        },
        {
            id: 'viewridge-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/viewridge.png',
            link: 'https://depts.washington.edu/civilr/covenants/View%20Ridge%20Divisions%203-8.pdf',
            description: '',
            location: {
                center: { lon: -122.26547, lat: 47.68535 },
                zoom: 13.87,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Udistrict-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/Udistrict.png',
            link: 'https://www.youtube.com/watch?v=Jtf8Kl_XDFE&feature=youtu.be',
            description: '',
            location: {
                center: { lon: -122.30625, lat: 47.66299 },
                zoom: 18.92,
                pitch: 75.00,
                bearing: -145.43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                // layer: "ud",
                // opacity: 0
            }],
            onChapterExit: [{
                // layer: "ud",
                // opacity: 0
            }]
        },
        {
            id: 'Clyde-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/ClydeHill.png',
            link: 'https://depts.washington.edu/civilr/images/segregated/covenants/Aryans/Aryans_only800-96dpi.jpg',
            description: '',
            location: {
                center: { lon: -122.20995, lat: 47.62908 },
                zoom: 13.6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'CapHill-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/CapitolHill.png',
            link: 'https://depts.washington.edu/civilr/images/segregated/covenants/Executed-covenant_800.jpg',
            description: '',
            location: {
                center: { lon: -122.30280, lat: 47.62739 },
                zoom: 15.83,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'CD-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/CentralDistrict.png',
            link: 'https://depts.washington.edu/civilr/images/segregated/covenants/ghettoSeattle_800.jpg',
            description: '',
            location: {
                center: { lon: -122.30182, lat: 47.60240 },
                zoom: 13.62,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
