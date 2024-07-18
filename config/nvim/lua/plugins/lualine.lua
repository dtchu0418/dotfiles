local function clock()
    local time = tostring(os.date()):sub(12,16)
    if os.time() % 2 == 1 then time = time:gsub(":", " ") end
    return time
end

local lualineConfig = {
    sections = {
        lualine_z = {
            function ()
                return "  " .. os.date("%-I:%02M %p")
            end
        }
    }
}

return {
    'nvim-lualine/lualine.nvim',
    dependencies = {
        'nvim-tree/nvim-web-devicons'
    },
    opts = lualineConfig,
}
