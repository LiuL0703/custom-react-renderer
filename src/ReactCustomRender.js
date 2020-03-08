import ReactReconciler from 'react-reconciler';


const ReactReconcilerInst = ReactReconciler({
  supportsMutation: true,

  createInstance: (
    type, 
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) => {
    // console.log(type, props)
    let el = document.createElement(type);
    // if(props.className) el.className = props.className;
    // if(props.src) el.src = props.src;
    // ...

    Object.keys(props).forEach(propName =>{
      const propValue = props[propName];

      if(propName === 'className'){
        el.className = propValue;
      }else if(propName === 'onClick'){
        el.addEventListener('click',propValue);
      }else if(propName === 'bgColor'){
        el.style.backgroundColor = propValue;
      }else if(propName === 'style'){
        // 
        // const style = el.style
        // Object.keys(propValue).forEach(styleName => {
        //   let styleValue = propValue[styleName]
        //   style.setProperty(styleName, styleValue)
        // })
      }else if(propName === 'children'){
        console.log('propValue',propValue,'propName',propName)
        if(typeof propValue === 'string' || propValue === 'number'){
          el.textContent = propValue;
        }
      }else{
        el.setAttribute(propName, propValue);
      }
    })

    return el;
  },
  
  createTextInstance: (
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) => {
    return document.createTextNode(text);
  },

  appendChildToContainer:(
    container,
    child,
  ) => {
    container.appendChild(child)
  },

  appendChild:(
    parent,
    child,
  ) => {
    parent.appendChild(child)
  },

  appendInitialChild: (
    parent,
    child,
  ) => {
    parent.appendChild(child)
  },

  prepareUpdate: (
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext,
  )=>{
    let payload = {};
    console.log({instance},{type},{oldProps},{newProps})
    if(typeof oldProps.children === 'string' || typeof oldProps.children === 'number'){
      payload.text = newProps.children;
    }
    // todo 
    if(oldProps.bgColor !== newProps.bgColor){
      payload.newBgColor =  newProps.bgColor;
    }
    return payload;
  },

  commitUpdate: (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork,
  ) => {
    if(updatePayload.newBgColor){
      instance.style.backgroundColor = updatePayload.newBgColor;
    }

    // todo
    if(updatePayload.text){
      instance.textContent = updatePayload.text;
    }

    return instance;
  },

  commitTextUpdate:(
    textInstance,
    oldText,
    newText,
  )=>{
    console.log('================================')
    console.log({textInstance},{oldText},{newText})
    console.log('================================')
    textInstance.text = newText;
  },

  removeChild:(
    parentInstance,
    child,
  )=>{
    parentInstance.removeChild(child);
  },

  removeChildFromContainer:(
    container,
    child,
  )=>{
    container.removeChild(child);
  },

  insertBefore:(
    parentInstance,
    child,
    beforeChild,
  )=>{
    parentInstance.insertBefore(child,beforeChild)
  },
  insertInContainerBefore:(
    container,
    child,
    beforeChild,
  ) => {
    container.insertBefore(child,beforeChild)
  },

  appendAllChildren: ()=>{},
  prepareForCommit: ()=>{},
  finalizeInitialChildren: ()=>{},
  getChildHostContext: ()=>{},
  getPublicInstance:()=>{},
  getRootHostContext:() => {},
  resetAfterCommit: ()=>{},
  shouldSetTextContent: (
    type,
    props,
  )=>{
    // return typeof props.children === 'string' || typeof props.children === 'number';
  },

});


export default {
  render:(reactElement,container) => {
    let root = container._reactRootContainer;
    if(!root){
      const isConcurrent = true;
      root = ReactReconcilerInst.createContainer(container,isConcurrent)
    }

    return ReactReconcilerInst.updateContainer(reactElement,root)
  },
}

