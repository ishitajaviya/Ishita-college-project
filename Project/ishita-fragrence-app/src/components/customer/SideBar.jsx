import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import '../../components/customer/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
  },
  accordion: {
    marginBottom: theme.spacing(2),
    boxShadow: 'none',
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  accordionSummary: {
    backgroundColor: '#fff',
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0',
    borderRadius: '4px',
  },
  accordionSummaryContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1, 0),
  },
  slider: {
    marginBottom: theme.spacing(1),
  },
}));

const PriceSlider = () => {
  const classes = useStyles();

  const [price, setPrice] = React.useState([0, 4450]);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="price-slider" gutterBottom>
        PRICE
      </Typography>
      <Slider
        value={price}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="price-slider"
        className={classes.slider}
        min={0}
        max={4450}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
       <Typography>₹ {price[0]}</Typography>
        <Typography>₹ {price[1]}</Typography>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleAvailabilityChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="availability-content"
          id="availability-header"
          className={classes.accordionSummary}
        >
          <Typography>AVAILABILITY</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleAvailabilityChange} />}
            label={checked ? 'In stock only' : 'All'}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="price-content"
          id="price-header"
          className={classes.accordionSummary}
        >
          <Typography>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <PriceSlider /> {/* Include PriceSlider component here */}
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="product-type-content"
          id="product-type-header"
          className={classes.accordionSummary}
        >
          <Typography>PRODUCT TYPE</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>Perfume (15)</Typography>
        </AccordionDetails>
      </Accordion>


      {/* Add more filters as needed */}
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="more-filters-content"
          id="more-filters-header"
          className={classes.accordionSummary}
        >
          <Typography>MORE FILTERS</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
        
          <div class="checkbox-control">
        <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-100ml(7)" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="above &amp; beyond"></input>
          <label>100ML (7)</label>
          </div>  

        <div>
         <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-above-amp-beyond" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="above &amp; beyond"></input>
          <label for="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-above-amp-beyond">above &amp; beyond (1)</label>
          </div>

          <div>
         <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-5th-amp-always" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="5th &amp; always (1)"></input>
          <label for="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-5th-amp-always">5th &amp; always (1)</label>
          </div>
          
          <div>
         <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-best seller (2)" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="above &amp; beyon"></input>
          <label for="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-best seller (2)">best seller (2)</label>
          </div>
            
          <div>
         <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-best perfume (1)" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="best perfume (1)"></input>
          <label for="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-best perfume (1)">best perfume (1)</label>
          </div>
    
          <div>
         <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-amber(2)" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="amber (2)"></input>
          <label for="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-amber(2)">amber (2)</label>
          </div>
            
          <div>
         <input id="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-aquilaria awadhi (1)" class="dot-checkbox" type="checkbox" name="filter.p.tag" value="aquilaria awadhi (1)"></input>
          <label for="checkbox-facets-drawer-3-template--14567039500382__main--filter.p.tag-aquilaria awadhi (1)">aquilaria awadhi (1)</label>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
