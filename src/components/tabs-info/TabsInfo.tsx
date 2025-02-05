import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ContactForm from './contact-form/ContactForm';
import ShowcaseProduct from './showcase-products/ShowcaseProducts';
import { products } from '../../common/utils/ShowcaseProductList';


const TabsInfo = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& .MuiTabs-indicator': {
                backgroundColor: 'black',
                height: '2px',
                borderRadius: '2px',
              },
            }}
          >
            <Tab label="Formulario de Contacto" value="1" 
              sx={{
                '&.Mui-selected': {
                  color: 'black',
                  fontWeight: 'bold',
                },
              }}/>
            <Tab label="Video StudioF" value="2" sx={{
                '&.Mui-selected': {
                  color: 'black',
                  fontWeight: 'bold',
                },
              }}/>
            <Tab label="Vitrina Productos" value="3" sx={{
                '&.Mui-selected': {
                  color: 'black',
                  fontWeight: 'bold',
                },
              }}/>
          </TabList>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <TabPanel value="1">
            <ContactForm />
          </TabPanel>
          <TabPanel value="2">
            <iframe width="760" height="515" src="https://www.youtube.com/embed/lZ8zzNxH284?si=87hX8vnOA2sxh9Mw" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </TabPanel>
          <TabPanel value="3">
            <ShowcaseProduct products={products} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  )
}

export default TabsInfo