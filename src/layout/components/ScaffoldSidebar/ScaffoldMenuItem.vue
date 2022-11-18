<script>
export default {
  name: 'SwMenuItem',
  functional: true,
  props: {
    //  菜单的icon图标
    icon: {
      type: String,
      default: ''
    },
    //  菜单标题
    title: {
      type: String,
      default: ''
    }
  },
  render(createElement, context) {
    // 获取参数
    const { icon, title } = context.props
    // 组件体
    const nodes = []
    if (icon) {
      nodes.push(<sw-svg icon-class={icon} class-name='svg-icon'/>)
    }
    if (title) {
      nodes.push(<span slot='title'>{(title)}</span>)
    }
    return nodes
  }
}
</script>

<style scoped>
.svg-icon{
  font-size: 18px;
}
</style>
