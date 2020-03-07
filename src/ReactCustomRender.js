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
    console.log(type, props)
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
  )=>{},

  commitUpdate: (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork,
  ) => {},

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

  // commitTextUpdate:()=>{},

  appendAllChildren: ()=>{},
  prepareForCommit: ()=>{},
  finalizeInitialChildren: ()=>{},
  getChildHostContext: ()=>{},
  getPublicInstance:()=>{},
  getRootHostContext:() => {},
  resetAfterCommit: ()=>{},
  shouldSetTextContent: ()=>{},

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

