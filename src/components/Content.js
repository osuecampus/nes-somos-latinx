import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { setCurrentUnit, setCurrentPage } from "../redux/Actions";

// BLOCKS //
import blocks from '../blocks';

// ROUTER //
import { Link } from 'react-router-dom';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    window.document.title = this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].title + ' | ' + this.props.content[0].config.title + ' | Oregon State University'
  }

  componentDidUpdate(){
    window.document.title = this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].title + ' | ' + this.props.content[0].config.title + ' | Oregon State University'
  }

  render() {
    return (
      <div role="main" id={'contentArea'} className={'contentArea ' + this.props.fontSize }>
        <div className={'topMiniNav'}>
          <div className={'topMiniPrevious'}>

            {this.props.currentUnit == 0 && this.props.currentPage == 0 ? <div className={'beginningNode'}><svg id="begin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.23 230.28"><title>Begin</title><g ><path d="M15.13,107.77H127.36a32,32,0,0,0-2.35-3.09c-5.86-5.92-11.82-11.74-17.64-17.7-3.81-3.89-3.92-8.12-.56-11.44,3.13-3.09,7.12-2.91,11,.94q16.55,16.33,32.86,32.88c4.19,4.26,4.17,8.43-.08,12.73q-16,16.16-32.31,32c-4,3.86-7.66,4-11,.75-3.16-3.05-3-7.15.8-11,6.54-6.65,13.22-13.15,20.94-20.81-3.14-.16-5-.34-6.8-.34q-55.5,0-111,0c-10,0-11.69-1.84-11.19-11.78C2.52,62,34,20.11,80.68,5.4,111.9-4.44,142.41-.66,171,15.28c32.74,18.27,52.76,46.27,58,83.37,5.28,37.26-6.19,69.89-32.65,96.69-21.85,22.13-48.58,34-79.88,34.93-5.51.16-8.16-1.81-8.58-6.16s2.22-7.52,7.3-8.38c1.47-.25,3-.17,4.46-.46,9.92-2,20.21-2.89,29.67-6.19,41.37-14.41,67.22-53.56,65.76-97.29-2.4-71.7-76.67-118.36-143.23-87.18-33.78,15.83-51.76,44.3-56.86,81A11.45,11.45,0,0,0,15.13,107.77Z"/></g></svg> {this.props.language == 'en' ? 'Beginning' : 'Principio'}</div> : null}
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[(Number(this.props.currentPage)-1)] ? 
              (<Link to={'/'+this.props.currentUnit+'/'+(Number(this.props.currentPage)-1)} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage(Number(this.props.currentPage)-1, this.props.currentUnit), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage(Number(this.props.currentPage)-1, this.props.currentUnit), window.scrollTo(0,0))}><div title={this.props.content[0].sections[this.props.currentUnit].content[Number(this.props.currentPage)-1].title} className={'pageTitle'}>
                {this.props.language == 'en' ? 'Previous Page' : 'Pagina anterior'}
              </div>
              </Link>)
              :
                this.props.content[0].sections[this.props.currentUnit-1] ?
                  <Link to={'/'+(this.props.currentUnit - 1)+'/' + (this.props.content[0].sections[this.props.currentUnit-1].content.length - 1)} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage( (this.props.content[0].sections[this.props.currentUnit-1].content.length - 1) , (this.props.currentUnit-1)), this.props.setCurrentUnit((this.props.currentUnit-1)), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage((this.props.content[0].sections[this.props.currentUnit-1].content.length - 1), (this.props.currentUnit-1)), this.props.setCurrentUnit((this.props.currentUnit-1)), window.scrollTo(0,0))} className={'previousNode'}>
                    <svg id="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.3 230.85"><title>Previous Section</title><path d="M75.22,122.69c1.8,0,3.66.18,6.8.34-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.31-15.84,32.31-32c4.25-4.3,4.27-8.47.08-12.73Q87.37,92.82,70.81,76.48c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,5.82,6,11.78,11.78,17.64,17.7a30.66,30.66,0,0,1,2.35,3.09H53v14.92Z" transform="translate(0.05 0)"/><path d="M229,98.65c-5.24-37.1-25.26-65.1-58-83.37C142.41-.66,111.9-4.44,80.68,5.4,34,20.11,2.52,62,0,110.91c-.5,9.94,1.19,11.78,11.19,11.78H100V107.77H15.13a12,12,0,0,1-.14-2.16c5.1-36.7,23.08-65.17,56.86-81,66.56-31.18,140.83,15.48,143.23,87.18,0,1.12,0,2.23,0,3.35h15.11A124.62,124.62,0,0,0,229,98.65Z" transform="translate(0.05 0)"/><path d="M107.89,224.11c.38,4,2.63,5.95,7.21,6.15V215.75C110.08,216.63,107.47,219.79,107.89,224.11Z" transform="translate(0.05 0)"/><path d="M116.47,230.27c31.3-.93,58-12.8,79.88-34.93,22.48-22.77,34.13-49.75,33.89-80.2H215.13c.06,42.37-25.5,79.9-65.81,93.94-9.46,3.3-19.75,4.19-29.67,6.19-1.46.29-3,.21-4.46.46l-.09,0v14.51C115.54,230.28,116,230.28,116.47,230.27Z" transform="translate(0.05 0)"/><path d="M1,117.07c.93,31.3,12.8,58,34.93,79.88,22.77,22.49,49.75,34.14,80.2,33.9V215.73c-42.37.07-79.9-25.5-93.94-65.81C18.9,140.46,18,130.17,16,120.25c-.29-1.46-.21-3-.46-4.46a.24.24,0,0,1,0-.08H1C1,116.14,1,116.59,1,117.07Z" transform="translate(0.05 0)"/><path d="M143.62,109.8Q127.3,93.26,110.76,76.92c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,2.05,2.1,4.13,4.18,6.21,6.25L129,116.15l-7.31,7.31H122c-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.3-15.84,32.31-32C147.79,118.23,147.81,114.06,143.62,109.8Z" transform="translate(0.05 0)"/></svg>
                     <div className="pageTitle">{this.props.language == 'en' ? 'Previous Section' : 'Sección Anterior'}</div> 
                  </Link>
                : null)
            :null}
            
          </div>
          <div className={'topMiniNext'}>
          
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[(Number(this.props.currentPage)+1)] ? 
                (<Link to={'/'+this.props.currentUnit+'/'+(Number(this.props.currentPage)+1)} tabIndex={'4'}  onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage(Number(this.props.currentPage)+1, this.props.currentUnit), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage(Number(this.props.currentPage)+1, this.props.currentUnit), window.scrollTo(0,0))}>
                  <div title={this.props.content[0].sections[this.props.currentUnit].content[Number(this.props.currentPage)+1].title} className={'pageTitle'}>
				  {this.props.language == 'en' ? 'Next Page' : 'Próxima página'}
                  </div>
                </Link>)
              :
                this.props.content[0].sections[this.props.currentUnit+1] ?
                  <Link to={'/'+(this.props.currentUnit + 1)+'/0'} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage(0, (this.props.currentUnit+1)), this.props.setCurrentUnit((this.props.currentUnit+1)), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage(0, (this.props.currentUnit+1)), this.props.setCurrentUnit((this.props.currentUnit+1)), window.scrollTo(0,0))} className={'nextNode'}>
                    <div className="pageTitle">{this.props.language == 'en' ? 'Next Section' : 'Próxima Sección'}</div> 
                    <svg id="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.3 230.85"><title>Next Section</title><path d="M75.22,122.69c1.8,0,3.66.18,6.8.34-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.31-15.84,32.31-32c4.25-4.3,4.27-8.47.08-12.73Q87.37,92.82,70.81,76.48c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,5.82,6,11.78,11.78,17.64,17.7a30.66,30.66,0,0,1,2.35,3.09H53v14.92Z" transform="translate(0.05 0)"/><path d="M229,98.65c-5.24-37.1-25.26-65.1-58-83.37C142.41-.66,111.9-4.44,80.68,5.4,34,20.11,2.52,62,0,110.91c-.5,9.94,1.19,11.78,11.19,11.78H100V107.77H15.13a12,12,0,0,1-.14-2.16c5.1-36.7,23.08-65.17,56.86-81,66.56-31.18,140.83,15.48,143.23,87.18,0,1.12,0,2.23,0,3.35h15.11A124.62,124.62,0,0,0,229,98.65Z" transform="translate(0.05 0)"/><path d="M107.89,224.11c.38,4,2.63,5.95,7.21,6.15V215.75C110.08,216.63,107.47,219.79,107.89,224.11Z" transform="translate(0.05 0)"/><path d="M116.47,230.27c31.3-.93,58-12.8,79.88-34.93,22.48-22.77,34.13-49.75,33.89-80.2H215.13c.06,42.37-25.5,79.9-65.81,93.94-9.46,3.3-19.75,4.19-29.67,6.19-1.46.29-3,.21-4.46.46l-.09,0v14.51C115.54,230.28,116,230.28,116.47,230.27Z" transform="translate(0.05 0)"/><path d="M1,117.07c.93,31.3,12.8,58,34.93,79.88,22.77,22.49,49.75,34.14,80.2,33.9V215.73c-42.37.07-79.9-25.5-93.94-65.81C18.9,140.46,18,130.17,16,120.25c-.29-1.46-.21-3-.46-4.46a.24.24,0,0,1,0-.08H1C1,116.14,1,116.59,1,117.07Z" transform="translate(0.05 0)"/><path d="M143.62,109.8Q127.3,93.26,110.76,76.92c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,2.05,2.1,4.13,4.18,6.21,6.25L129,116.15l-7.31,7.31H122c-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.3-15.84,32.31-32C147.79,118.23,147.81,114.06,143.62,109.8Z" transform="translate(0.05 0)"/></svg>
                  </Link>
                : 
                <div className={'endNode'}>{this.props.language == 'en' ? 'The End' : 'Fin'} <svg id="end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.7 229.68"><title>icon-end</title><path d="M1.24,131.29c5.23,37,25.2,64.93,57.85,83.15,28.52,15.9,59,19.67,90.09,9.85,46.56-14.67,78-56.45,80.44-105.23.5-9.92-1.19-11.75-11.16-11.75H129.91v14.88h84.65a11.89,11.89,0,0,1,.14,2.15c-5.09,36.61-23,65-56.71,80.79C91.6,236.23,17.52,189.69,15.13,118.18c0-1.12-.05-2.23-.05-3.34H0A125.74,125.74,0,0,0,1.24,131.29Z"/><path d="M122,6.15c-.38-4-2.63-5.94-7.19-6.13V14.49C119.85,13.61,122.46,10.46,122,6.15Z"/><path d="M113.48,0C82.26.93,55.6,12.77,33.81,34.85,11.39,57.56-.24,84.47,0,114.84H15.08C15,72.58,40.51,35.15,80.72,21.14c9.43-3.29,19.7-4.18,29.59-6.17,1.46-.29,3-.21,4.45-.46l.09,0V0C114.41,0,114,0,113.48,0Z"/><rect x="114.03" y="72.95" width="16.11" height="83.53" rx="5.28" transform="translate(244.17 229.43) rotate(180)"/></svg></div>
                )
            : null }
        
          </div>
        </div>
        <div id={'readableContent'}>
                {this.props.content[0] ? this.props.content[0].sections[this.props.currentUnit].title == 'Home' ? null :
                  <h2 className={'unitIntro'}>{this.props.content[0] && this.props.language == 'en' ? this.props.content[0].sections[this.props.currentUnit].title:this.props.content[0].sections[this.props.currentUnit].esTitle}</h2>
                : null }
          {this.props.content[0] ? this.props.content[0].sections[this.props.currentUnit].title == 'Home' ? null :
          	<h1 className={'pageIntro'}>{this.props.content[0] && (this.props.language == 'en' || !this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].esTitle) ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].title:this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].esTitle}</h1>
          : null }
        
          {this.props.content[0] ? 
            (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].blocks.map((block, index) => {
              const MyComponent = blocks[block.type]; return React.createElement(MyComponent, { key: index, details: block.details, language: this.props.language, content: this.props.content });
            })) 
          : null }
        </div>

        <div className={'bottomMiniNav'}>
          <div className={'topMiniPrevious'}>

            {this.props.currentUnit == 0 && this.props.currentPage == 0 ? <div className={'beginningNode'}><svg id="begin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.23 230.28"><title>Begin</title><g ><path d="M15.13,107.77H127.36a32,32,0,0,0-2.35-3.09c-5.86-5.92-11.82-11.74-17.64-17.7-3.81-3.89-3.92-8.12-.56-11.44,3.13-3.09,7.12-2.91,11,.94q16.55,16.33,32.86,32.88c4.19,4.26,4.17,8.43-.08,12.73q-16,16.16-32.31,32c-4,3.86-7.66,4-11,.75-3.16-3.05-3-7.15.8-11,6.54-6.65,13.22-13.15,20.94-20.81-3.14-.16-5-.34-6.8-.34q-55.5,0-111,0c-10,0-11.69-1.84-11.19-11.78C2.52,62,34,20.11,80.68,5.4,111.9-4.44,142.41-.66,171,15.28c32.74,18.27,52.76,46.27,58,83.37,5.28,37.26-6.19,69.89-32.65,96.69-21.85,22.13-48.58,34-79.88,34.93-5.51.16-8.16-1.81-8.58-6.16s2.22-7.52,7.3-8.38c1.47-.25,3-.17,4.46-.46,9.92-2,20.21-2.89,29.67-6.19,41.37-14.41,67.22-53.56,65.76-97.29-2.4-71.7-76.67-118.36-143.23-87.18-33.78,15.83-51.76,44.3-56.86,81A11.45,11.45,0,0,0,15.13,107.77Z"/></g></svg> {this.props.language == 'en' ? 'Beginning' : 'Principio'}</div> : null}
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[Number(this.props.currentPage)-1] ? 
              (<Link to={'/'+this.props.currentUnit+'/'+(Number(this.props.currentPage)-1)} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage(Number(this.props.currentPage)-1, this.props.currentUnit),window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage(Number(this.props.currentPage)-1, this.props.currentUnit),window.scrollTo(0,0))}>
                <div title={this.props.content[0].sections[this.props.currentUnit].content[Number(this.props.currentPage)-1].title} className={'pageTitle'}>
				{this.props.language == 'en' ? 'Previous Page' : 'Pagina anterior'}
                </div>
              </Link>)
              :
                this.props.content[0].sections[this.props.currentUnit-1] ?
                  <Link to={'/'+(this.props.currentUnit - 1)+'/'+ (this.props.content[0].sections[this.props.currentUnit-1].content.length - 1)} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage( (this.props.content[0].sections[this.props.currentUnit-1].content.length - 1) , (this.props.currentUnit-1)), this.props.setCurrentUnit((this.props.currentUnit-1)), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage((this.props.content[0].sections[this.props.currentUnit-1].content.length - 1), (this.props.currentUnit-1)), this.props.setCurrentUnit((this.props.currentUnit-1)), window.scrollTo(0,0))} className={'previousNode'}>
                    <svg id="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.3 230.85"><title>Previous Section</title><path d="M75.22,122.69c1.8,0,3.66.18,6.8.34-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.31-15.84,32.31-32c4.25-4.3,4.27-8.47.08-12.73Q87.37,92.82,70.81,76.48c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,5.82,6,11.78,11.78,17.64,17.7a30.66,30.66,0,0,1,2.35,3.09H53v14.92Z" transform="translate(0.05 0)"/><path d="M229,98.65c-5.24-37.1-25.26-65.1-58-83.37C142.41-.66,111.9-4.44,80.68,5.4,34,20.11,2.52,62,0,110.91c-.5,9.94,1.19,11.78,11.19,11.78H100V107.77H15.13a12,12,0,0,1-.14-2.16c5.1-36.7,23.08-65.17,56.86-81,66.56-31.18,140.83,15.48,143.23,87.18,0,1.12,0,2.23,0,3.35h15.11A124.62,124.62,0,0,0,229,98.65Z" transform="translate(0.05 0)"/><path d="M107.89,224.11c.38,4,2.63,5.95,7.21,6.15V215.75C110.08,216.63,107.47,219.79,107.89,224.11Z" transform="translate(0.05 0)"/><path d="M116.47,230.27c31.3-.93,58-12.8,79.88-34.93,22.48-22.77,34.13-49.75,33.89-80.2H215.13c.06,42.37-25.5,79.9-65.81,93.94-9.46,3.3-19.75,4.19-29.67,6.19-1.46.29-3,.21-4.46.46l-.09,0v14.51C115.54,230.28,116,230.28,116.47,230.27Z" transform="translate(0.05 0)"/><path d="M1,117.07c.93,31.3,12.8,58,34.93,79.88,22.77,22.49,49.75,34.14,80.2,33.9V215.73c-42.37.07-79.9-25.5-93.94-65.81C18.9,140.46,18,130.17,16,120.25c-.29-1.46-.21-3-.46-4.46a.24.24,0,0,1,0-.08H1C1,116.14,1,116.59,1,117.07Z" transform="translate(0.05 0)"/><path d="M143.62,109.8Q127.3,93.26,110.76,76.92c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,2.05,2.1,4.13,4.18,6.21,6.25L129,116.15l-7.31,7.31H122c-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.3-15.84,32.31-32C147.79,118.23,147.81,114.06,143.62,109.8Z" transform="translate(0.05 0)"/></svg>
                    <div className="pageTitle">{this.props.language == 'en' ? 'Previous Section' : 'Sección Anterior'}</div> 
                  </Link>
                : null)
            :null}
            
          </div>
          <div className={'topMiniNext'}>
          
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[Number(this.props.currentPage)+1] ? 
              (<Link to={'/'+this.props.currentUnit+'/'+(Number(this.props.currentPage)+1)} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage(Number(this.props.currentPage)+1, this.props.currentUnit), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage(Number(this.props.currentPage)+1, this.props.currentUnit), window.scrollTo(0,0))}>
                <div title={this.props.content[0].sections[this.props.currentUnit].content[Number(this.props.currentPage)+1].title} className={'pageTitle'}>
				{this.props.language == 'en' ? 'Next Page' : 'Próxima página'}
                </div>
             </Link>)
              :
                this.props.content[0].sections[this.props.currentUnit+1] ?
                  <Link to={'/'+(this.props.currentUnit + 1)+'/0'} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? (this.props.setCurrentPage(0, (this.props.currentUnit+1)), this.props.setCurrentUnit((this.props.currentUnit+1)), window.scrollTo(0,0)) : null } onClick={() => (this.props.setCurrentPage(0, (this.props.currentUnit+1)), this.props.setCurrentUnit((this.props.currentUnit+1)), window.scrollTo(0,0))} className={'nextNode'}>
                    <div className="pageTitle">{this.props.language == 'en' ? 'Next Section' : 'Próxima Sección'}</div> 
                    <svg id="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.3 230.85"><title>Next Section</title><path d="M75.22,122.69c1.8,0,3.66.18,6.8.34-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.31-15.84,32.31-32c4.25-4.3,4.27-8.47.08-12.73Q87.37,92.82,70.81,76.48c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,5.82,6,11.78,11.78,17.64,17.7a30.66,30.66,0,0,1,2.35,3.09H53v14.92Z" transform="translate(0.05 0)"/><path d="M229,98.65c-5.24-37.1-25.26-65.1-58-83.37C142.41-.66,111.9-4.44,80.68,5.4,34,20.11,2.52,62,0,110.91c-.5,9.94,1.19,11.78,11.19,11.78H100V107.77H15.13a12,12,0,0,1-.14-2.16c5.1-36.7,23.08-65.17,56.86-81,66.56-31.18,140.83,15.48,143.23,87.18,0,1.12,0,2.23,0,3.35h15.11A124.62,124.62,0,0,0,229,98.65Z" transform="translate(0.05 0)"/><path d="M107.89,224.11c.38,4,2.63,5.95,7.21,6.15V215.75C110.08,216.63,107.47,219.79,107.89,224.11Z" transform="translate(0.05 0)"/><path d="M116.47,230.27c31.3-.93,58-12.8,79.88-34.93,22.48-22.77,34.13-49.75,33.89-80.2H215.13c.06,42.37-25.5,79.9-65.81,93.94-9.46,3.3-19.75,4.19-29.67,6.19-1.46.29-3,.21-4.46.46l-.09,0v14.51C115.54,230.28,116,230.28,116.47,230.27Z" transform="translate(0.05 0)"/><path d="M1,117.07c.93,31.3,12.8,58,34.93,79.88,22.77,22.49,49.75,34.14,80.2,33.9V215.73c-42.37.07-79.9-25.5-93.94-65.81C18.9,140.46,18,130.17,16,120.25c-.29-1.46-.21-3-.46-4.46a.24.24,0,0,1,0-.08H1C1,116.14,1,116.59,1,117.07Z" transform="translate(0.05 0)"/><path d="M143.62,109.8Q127.3,93.26,110.76,76.92c-3.88-3.85-7.87-4-11-.94-3.36,3.32-3.25,7.55.56,11.44,2.05,2.1,4.13,4.18,6.21,6.25L129,116.15l-7.31,7.31H122c-7.72,7.66-14.4,14.16-20.94,20.81-3.8,3.85-4,7.95-.8,11,3.34,3.25,7,3.11,11-.75q16.3-15.84,32.31-32C147.79,118.23,147.81,114.06,143.62,109.8Z" transform="translate(0.05 0)"/></svg>
                  </Link>
              : 
                <div className={'endNode'}>{this.props.language == 'en' ? 'The End' : 'Fin'} <svg id="end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.7 229.68"><title>icon-end</title><path d="M1.24,131.29c5.23,37,25.2,64.93,57.85,83.15,28.52,15.9,59,19.67,90.09,9.85,46.56-14.67,78-56.45,80.44-105.23.5-9.92-1.19-11.75-11.16-11.75H129.91v14.88h84.65a11.89,11.89,0,0,1,.14,2.15c-5.09,36.61-23,65-56.71,80.79C91.6,236.23,17.52,189.69,15.13,118.18c0-1.12-.05-2.23-.05-3.34H0A125.74,125.74,0,0,0,1.24,131.29Z"/><path d="M122,6.15c-.38-4-2.63-5.94-7.19-6.13V14.49C119.85,13.61,122.46,10.46,122,6.15Z"/><path d="M113.48,0C82.26.93,55.6,12.77,33.81,34.85,11.39,57.56-.24,84.47,0,114.84H15.08C15,72.58,40.51,35.15,80.72,21.14c9.43-3.29,19.7-4.18,29.59-6.17,1.46-.29,3-.21,4.45-.46l.09,0V0C114.41,0,114,0,113.48,0Z"/><rect x="114.03" y="72.95" width="16.11" height="83.53" rx="5.28" transform="translate(244.17 229.43) rotate(180)"/></svg></div>
                )
            : null}
        
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fontSize: state.fontSize,
    currentPage: state.currentPage,
    currentUnit: state.currentUnit,
    content: state.content,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUnit: (value) => dispatch(setCurrentUnit(value)),
    setCurrentPage: (value, unit) => dispatch(setCurrentPage(value, unit)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);