// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })

  describe('md.one()', function() {
    it('should return an object', function() {
      expect(typeof md.one('div')).to.equal('object')
    })
    it('should return a div tag', function() {
      expect((md.one('div')).tagName.toLowerCase()).to.equal('div')
    })
    it('should return an element with the mocha id', function() {
      expect((md.one('#mocha')).id).to.equal('mocha')
    })
    it('should return null when no selector is passed', function() {
      expect(md.one()).to.equal(null)
    })
  })

  describe('md.all()', function() {
    it('should return an object', function() {
      expect(typeof md.all('li')).to.equal('object')
    })
    it('should return more than one element', function() {
      expect(((Array.from(md.all('li')))).length).to.be.at.least(2)
    })
  })

  describe('md.remove()', function() {
    it('should remove the first image', function() {
      md.remove('img')
      expect(md.all('img').length).to.equal(3)
    })
    it('should only remove the first li child of the nav sidebar', function() {
      md.remove('.nav-sidebar li')
      expect(md.one('.nav-sidebar li a').innerHTML).to.equal('Reports')
    })
  })

  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
    it('should only add a CSS class to the first row of the table', function() {
      md.addClass('tbody tr', 'light_green')
      expect(md.one('tbody tr').classList.contains('light_green')).to.be.true
      expect(md.one('tbody tr:nth-child(2)').classList.contains('light_green')).to.be.false
    })
  })

  describe('md.removeClass()', function() {
    it('should remove a CSS class', function() {
      md.removeClass('h1', 'page-header')
      expect(md.one('h1').classList.contains('page-header')).to.be.false
    })
  })

  describe('md.hasClass()', function() {
    it('should return true if the element contains the CSS class', function() {
      expect(md.hasClass('nav', 'navbar')).to.be.true
    })
    it('should return false if the element does not contain the CSS class', function() {
      expect(md.hasClass('nav', 'container')).to.be.false
    })
  })

  describe('md.getAttr()', function() {
    it('should return the CSS classes on an element', function() {
      expect(md.getAttr('ul', 'class')).to.contain('nav')
    })
    it('should return mocha', function() {
      expect(md.getAttr('#mocha', 'id')).to.equal('mocha')
    })
  })

  describe('md.setAttr()', function() {
    it('should set the id of the first div to first', function() {
      md.setAttr('div', 'id', 'first')
      expect(md.one('div').id).to.equal('first')
    })
    it('should set the Reports nav item class to active', function() {
      md.setAttr('.nav-sidebar li', 'class', 'active')
      expect(md.one('.nav-sidebar li').classList.contains('active')).to.be.true
    })
  })

  describe('md.setHTML()', function() {
    it('should set the first image label to Image 1', function() {
      md.setHTML('h4', 'Image 1')
      expect(md.one('h4').innerHTML).to.equal('Image 1')
    })
    it('should replace the top nav bar links with Option 1, Option 2, and Option 3', function() {
      md.setHTML('#navbar ul',
      '<li><a href="#">Option 1</a</li><li><a href="#">Option 2</a></li><li><a href="#">Option 3</a></li>')
      expect(md.one('#navbar ul a').innerHTML).to.equal('Option 1')
    })
  })

  describe('md.getHTML()', function() {
    it('should return Current Quarter Details', function() {
      expect(md.getHTML('.sub-header')).to.equal('Current Quarter Details')
    })
    it('should return <a href="#">Reports</a>', function() {
      expect(md.getHTML('.nav-sidebar li')).to.equal('<a href="#">Reports</a>')
    })
  })

  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        md.flipPage('')
        expect(document.body.style.transform).to.equal('rotate(180deg)')
    })
  })

  describe('md.ajax()', function() {
    it('should load API data without error ', function(done) {
      md.ajax('http://swapi.co/api/people/', function(data) {
          console.log(data)
      })
      done()
    })
  })

  describe('md.getProp()', function() {
    it('should equal container-fluid', function() {
      expect(md.getProp('div', 'className')).to.equal('container-fluid')
    })
    it('should equal body', function() {
      expect((md.getProp('body', 'nodeName')).toLowerCase()).to.equal('body')
    })
  })

  describe('md.setProp()', function() {
    it('should set the title of the navbar brand to ACME, Inc.', function() {
      expect(md.setProp('.navbar-brand', 'title', 'ACME, Inc.').title).to.equal('ACME, Inc.')
    })
  })

  describe('md.getValue()', function() {
    it('should return blank for the input value', function() {
      expect(md.getValue('input')).to.equal('')
    })
  })

  describe('md.setValue()', function() {
    it('should set the search box value to Type search here...', function() {
      md.setValue('input', 'Type search here...')
      expect(md.one('input').value).to.equal('Type search here...')
    })
  })

  describe('md.addEvent()', function() {
    it('should change the search text to red when the search box is clicked', function() {
      md.addEvent('input', 'click', function() {
        this.style.color = 'red'
        expect(md.one('input').style.color).to.equal('red')
      })
    })
  })


})
