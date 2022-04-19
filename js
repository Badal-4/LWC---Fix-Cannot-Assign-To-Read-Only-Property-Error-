For resolving this issue, we need to clone that property to new variable and update it. After updating assign temporary variable to actual property.
allCheckBoxChange(event) {
        let tempAllRecords = Object.assign([], this.allOppList);
        for (let j = 0; j < this.allOppList.length; j++) {
                let tempRec = Object.assign({}, tempAllRecords[j]);
                tempRec.isChecked = event.detail.checked;
                tempAllRecords[j] = tempRec;
        }
        this.allOppList = tempAllRecords;
}
