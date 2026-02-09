const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.static(path.join(__dirname, 'public')));


app.get('/couponds', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/periodic-table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'périodique.html'));
});

app.get('/safty-informations', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'mainpage.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'calmai.html'));
});


app.get('/api/compound/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const searchUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/cids/JSON`;
        const searchRes = await axios.get(searchUrl);
        
        if (!searchRes.data.IdentifierList) {
            return res.status(404).json({ error: "Compound not found" });
        }
        const cid = searchRes.data.IdentifierList.CID[0];

        const propUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/Title,MolecularFormula,MolecularWeight,IUPACName,Charge,Complexity,HBondDonorCount,HBondAcceptorCount,HeavyAtomCount/JSON`;
        const viewUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/${cid}/JSON`;

        const [pRes, vRes] = await Promise.all([
            axios.get(propUrl).catch(() => null),
            axios.get(viewUrl).catch(() => null)
        ]);

        if (!pRes || !vRes) throw new Error("API Failure");

        res.json({
            cid: cid,
            properties: pRes.data.PropertyTable.Properties[0],
            details: vRes.data.Record.Section
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));