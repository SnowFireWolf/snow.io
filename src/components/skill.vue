<template>
    <div id="skill" class="skill">
        <div class="header">
            <div class="icon skill-ani">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="48px" height="48px">
                    <g>
                        <path d="m115.9,13.3c-4.3-4.3-10-6.7-16.1-6.7-6.1,0-11.8,2.4-16.1,6.7-1.9,1.9-3.4,4.1-4.5,6.5l-11.9-11.9c-1.6-1.6-4.2-1.6-5.7,0l-54,54c-1.6,1.6-1.6,4.1 5.32907e-15,5.7l54,54c0.8,0.8 1.8,1.2 2.9,1.2 1.1,0 2.1-0.4 2.9-1.2l17.2-17.2c1.1-1.1 1.5-2.8 0.9-4.3-0.6-1.5-1.9-2.5-3.5-2.6-3.5-0.3-6.8-1.8-9.3-4.2-2.8-2.8-4.3-6.5-4.3-10.4 0-3.9 1.5-7.6 4.3-10.4 2.8-2.8 6.5-4.3 10.4-4.3 3.9,0 7.6,1.5 10.4,4.3 2.5,2.5 4,5.8 4.2,9.3 0.1,1.6 1.1,3 2.6,3.5 1.5,0.6 3.2,0.2 4.3-0.9l16.7-16.7c0.8-0.8 1.2-1.8 1.2-2.9 0-1.1-0.4-2.1-1.2-2.9l-11.9-11.9c2.4-1.1 4.6-2.7 6.5-4.5 8.9-8.9 8.9-23.4 0-32.2zm-5.7,26.4c-2.4,2.4-5.5,3.9-8.9,4.2-1.6,0.2-2.9,1.2-3.4,2.7-0.5,1.5-0.2,3.1 1,4.2l13.9,13.9-8.8,8.8c-1.1-2.5-2.7-4.9-4.7-6.8-4.3-4.3-10-6.7-16.1-6.7-6.1,0-11.8,2.4-16.1,6.7-4.3,4.3-6.7,10-6.7,16.1 0,6.1 2.4,11.8 6.7,16.1 2,2 4.3,3.6 6.8,4.7l-9.3,9.3-48.4-48.2 48.2-48.2 13.9,13.9c1.1,1.1 2.8,1.5 4.2,1 1.5-0.5 2.5-1.9 2.7-3.4 0.3-3.4 1.8-6.5 4.2-8.9 2.8-2.8 6.5-4.3 10.4-4.3 3.9,0 7.6,1.5 10.4,4.3 5.7,5.6 5.7,14.9-2.84217e-14,20.6z" fill="#4f4f5a"></path>
                    </g>
                </svg>
            </div> Skill
        </div>
        <div class="items">
            <a class="skill_p button-item" v-for="(item, index) in skillList" :key="index">
                <i :class="item.icon"></i>
                <div class="name">{{item.name}}</div>
                <div class="skilled">{{item.level}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skillList: [
                {
                    name: 'HTML5',
                    icon: 'devicon-html5-plain',
                    level: '87%'
                },
                {
                    name: 'CSS',
                    icon: 'devicon-css3-plain',
                    level: '87%'
                },
                {
                    name: 'PHP',
                    icon: 'devicon-php-plain',
                    level: '38%'
                },
                {
                    name: 'nodeJS',
                    icon: 'devicon-nodejs-plain',
                    level: '41%'
                },
                {
                    name: 'Javascript',
                    icon: 'devicon-javascript-plain',
                    level: '58%'
                },
                {
                    name: 'Vue',
                    icon: 'devicon-vuejs-plain',
                    level: '69%'
                },
                {
                    name: 'Photoshop',
                    icon: 'devicon-photoshop-plain',
                    level: '45%'
                },
                {
                    name: 'illustrator',
                    icon: 'devicon-illustrator-plain',
                    level: '45%'
                },
            ]
        }
    },
    mounted() {
        this.scrollReveal().reveal('#skill', {
            origin: "bottom",
            distance: "5em",
            delay: 100,
            reset: true,
        });

        this.scrollReveal().reveal('.skilled', {
            origin: "bottom",
            distance: "1em",
            delay: 100,
            reset: true,
        });
    }
}
</script>