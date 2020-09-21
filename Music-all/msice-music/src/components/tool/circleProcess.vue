<!-- 环状进度条 -->
<template>
    <svg
        transform="rotate(-90 0 0)"
        transform-origin="50% 50%"
        :height="processOptions.width"
        :width="processOptions.width"
        x-mlns="http://www.w3.org/200/svg"
    >
        <circle
            :r="processOptions.r"
            :cx="processOptions.position"
            :cy="processOptions.position"
            :stroke="processOptions.backgroundColor"
            :stroke-width="processOptions.strokeWidth"
            fill="none"
        />
        <circle
            :r="processOptions.r"
            :cx="processOptions.position"
            :cy="processOptions.position"
            :stroke="processOptions.processColor"
            :stroke-dasharray="`${processOptions.percent},100000`"
            :stroke-width="processOptions.strokeWidth"
            fill="none"
            stroke-linecap="round"
        />
    </svg>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 30
        },
        strokeWidth: {
            type: Number,
            default: 2
        },
        backgroundColor: {
            type: String,
            default: "#c0c0c0"
        },
        processColor: {
            type: String,
            default: "#000"
        },
        percentage: {
            type: Number,
            default: 0.2
        }
    },
    // 监听属性 类似于data概念
    computed: {
        processOptions: function() {
            const PI = 3.1415926535896;
            let options = {
                r: 0,
                width: 0,
                percent: 0,
                position: 0,
                strokeWidth: this.strokeWidth,
                backgroundColor: this.backgroundColor,
                processColor: this.processColor
            };
            let perimeter = (this.width - 5) * PI;
            options.r = this.width / 2 - 2;
            options.width = this.width;
            options.position = this.width / 2;
            options.percent = perimeter * this.percentage;
            if (options.percent < 0) {
                options.percent = 0;
            }
            return options;
        }
    }
};
</script>
